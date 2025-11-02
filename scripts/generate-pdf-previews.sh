#!/bin/bash

# Generate PDF previews from assets
# Usage: bash scripts/generate-pdf-previews.sh

set -e

ASSETS_DIR="assets"
PREVIEW_DIR="assets/previews"

# Create previews directory if it doesn't exist
mkdir -p "$PREVIEW_DIR"

echo "🔍 Scanning for PDFs in $ASSETS_DIR..."

# Counter for generated previews
count=0

# Process each PDF
for pdf in "$ASSETS_DIR"/*.pdf; do
  if [ -f "$pdf" ]; then
    filename=$(basename "$pdf" .pdf)
    preview_file="$PREVIEW_DIR/${filename}-preview.png"

    echo "📄 Processing: $filename"

    # Generate preview: first page, 800x1000 crop, 150dpi, 85% quality
    magick convert \
      -density 150 \
      "$pdf[0]" \
      -quality 85 \
      -crop 800x1000+0+0 \
      +repage \
      "$preview_file"

    if [ $? -eq 0 ]; then
      echo "✅ Generated: $preview_file"
      ((count++))
    else
      echo "❌ Failed to generate preview for $filename"
    fi
  fi
done

if [ $count -eq 0 ]; then
  echo "⚠️  No PDFs found in $ASSETS_DIR"
  exit 1
else
  echo ""
  echo "✨ Successfully generated $count preview(s)!"
  echo "📁 Previews saved to: $PREVIEW_DIR"
fi
