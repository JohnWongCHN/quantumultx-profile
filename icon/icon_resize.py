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
        # Check if the file already exists in the output directory
        if os.path.exists(os.path.join(output_dir, file_name)):
            print(
                f"File '{file_name}' already exists in the output directory. Skipping..."
            )
            continue

        # Open the image file
        img = Image.open(os.path.join(input_dir, file_name))

        # Resize the image to 108x108
        img_resized = img.resize((108, 108))

        # Save the resized image to the output directory
        img_resized.save(os.path.join(output_dir, file_name))
