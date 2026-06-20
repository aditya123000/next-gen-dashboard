#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { globSync } from 'glob'

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

console.log('🔍 Scanning for layout-shifting CSS properties...\n')

const files = globSync('components/**/*.{tsx,ts}', { cwd: process.cwd() })

let violations = []

files.forEach((file) => {
  const content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf8')
  const lines = content.split('\n')
  
  lines.forEach((line, index) => {
    LAYOUT_PROPERTIES.forEach((prop) => {
      const regex = new RegExp(`(?:className|style)=["'](?:[^"']*\\b${prop}\\b[^"']*)["']`, 'g')
      if (regex.test(line)) {
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
