#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Properties that cause layout shifts
const LAYOUT_PROPERTIES = [
  'width',
  'height',
  'top',
  'bottom',
  'left',
  'right',
  'margin',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'padding',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'border',
  'borderWidth',
  'fontSize',
  'lineHeight',
  'position',
  'display',
  'flex',
  'grid',
]

// Properties that are safe (transform and opacity)
const SAFE_PROPERTIES = [
  'transform',
  'opacity',
  'color',
  'background',
  'backgroundColor',
  'boxShadow',
  'borderColor',
  'zIndex',
  'will-change',
]

console.log('🔍 Scanning for layout-shifting CSS properties...\n')

const files = glob.sync('components/**/*.{tsx,ts}', { cwd: process.cwd() })

let violations = []

files.forEach((file) => {
  const content = fs.readFileSync(path.join(process.cwd(), file), 'utf8')
  const lines = content.split('\n')
  
  lines.forEach((line, index) => {
    // Check for className strings with layout properties
    LAYOUT_PROPERTIES.forEach((prop) => {
      const regex = new RegExp(`(?:className|style)=["'](?:[^"']*\\b${prop}\\b[^"']*)["']`, 'g')
      if (regex.test(line)) {
        // But ignore if it's in a transition (probably using transform)
        if (!line.includes('transform') && !line.includes('transition-')) {
          violations.push({
            file,
            line: index + 1,
            content: line.trim(),
            property: prop,
          })
        }
      }
    })
  })
})


if (violations.length === 0) {
  console.log('✅ No layout-shifting properties found!')
} else {
  console.log(`⚠️ Found ${violations.length} potential issues:\n`)
  violations.forEach((v) => {
    console.log(`  📁 ${v.file}`)
    console.log(`  Line ${v.line}: ${v.content}`)
    console.log(`  Property: ${v.property}\n`)
  })
}