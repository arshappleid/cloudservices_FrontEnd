#!/bin/bash
# Downloads case-study PDFs from S3 into src/assets/pdfs/

PDF_DIR="src/assets/pdfs"
mkdir -p "$PDF_DIR"

URLS=(
  "https://cloudcompliant-website-docs.s3.us-east-1.amazonaws.com/Work/AWS-HIPAA-Compliance-Overview.pdf"
  "https://cloudcompliant-website-docs.s3.us-east-1.amazonaws.com/Work/AWS-SOC-Compliance-Overview.pdf"
  "https://cloudcompliant-website-docs.s3.us-east-1.amazonaws.com/Work/AWS-Firewall-Comparison-Guide.pdf"
  "https://cloudcompliant-website-docs.s3.us-east-1.amazonaws.com/Work/AWS-Pentesting-Guide.pdf"
)

for url in "${URLS[@]}"; do
  filename=$(basename "$url")
  echo "Downloading $filename ..."
  curl -fSL "$url" -o "$PDF_DIR/$filename"
  if [ $? -eq 0 ]; then
    echo "  ✓ Saved to $PDF_DIR/$filename"
  else
    echo "  ✗ Failed to download $filename"
  fi
done

echo ""
echo "Done. PDFs saved to $PDF_DIR/"
