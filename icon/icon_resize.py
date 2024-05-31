from PIL import Image
import os

# Input and output directories
input_dir = "./raw"
output_dir = "./output"

# Ensure output directory exists
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Iterate over files in the input directory
for file_name in os.listdir(input_dir):
    if file_name.endswith(".png"):
        # Open the image file
        img = Image.open(os.path.join(input_dir, file_name))

        # Resize the image to 108x108
        img_resized = img.resize((108, 108))

        # Save the resized image to the output directory
        img_resized.save(os.path.join(output_dir, file_name))
