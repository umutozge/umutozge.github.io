#!/usr/bin/env ruby
# frozen_string_literal: true

require 'fileutils'

OUTPUT_DIR = File.expand_path('../site-source/_output/exams', __dir__)
MACROS_TEX = File.expand_path('../site-source/_tex/latex-macros.tex', __dir__)

def run
  if ARGV.empty?
    abort "Usage: ruby scripts/generate-exam.rb <exam-basename>\n" \
          "Example: ruby scripts/generate-exam.rb 2026-03-12-502-quiz\n"
  end

  base     = File.basename(ARGV[0], '.md')
  combined = File.join(OUTPUT_DIR, "#{base}_combined.md")
  pdf_path = File.join(OUTPUT_DIR, "#{base}.pdf")

  unless File.exist?(combined)
    abort "Combined MD not found: #{combined}\nRun `bundle exec jekyll build` first."
  end

  cmd = [
    'pandoc',
    combined,
    '-o', pdf_path,
    '--template=eisvogel',
    '--pdf-engine=xelatex',
    '-H', MACROS_TEX,
    '--number-sections'
  ]

  puts "Running: #{cmd.join(' ')}"
  system(*cmd)

  if $?.success?
    puts "PDF written to #{pdf_path}"
  else
    warn 'Pandoc failed'
    exit 1
  end
end

run if __FILE__ == $PROGRAM_NAME
