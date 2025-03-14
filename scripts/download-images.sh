#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public

# Download sample images
curl -o public/bread-hero.jpg https://images.unsplash.com/photo-1509440159596-0249088772ff
curl -o public/bread-combo.jpg https://images.unsplash.com/photo-1509440159596-0249088772ff
curl -o public/cookies.jpg https://images.unsplash.com/photo-1499636136210-6f4ee915583e
curl -o public/muffins.jpg https://images.unsplash.com/photo-1558961363-fa8fdf82db35
curl -o public/buns.jpg https://images.unsplash.com/photo-1585478259715-4d3f5f6a2306
curl -o public/brownies.jpg https://images.unsplash.com/photo-1606313564200-e75d5e30476c
curl -o public/cake.jpg https://images.unsplash.com/photo-1578985545062-69928b1d9587

echo "Images downloaded successfully!" 