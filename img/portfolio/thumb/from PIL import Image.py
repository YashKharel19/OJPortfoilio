from PIL import Image

# Step 1: Open the image
image = Image.open("san2.png")  # Replace with your actual image file
image.show()  # (Optional) Display the original image

# Step 2: Maintain aspect ratio and set new width
new_width = 1220  # Change this as needed
new_height = 720 # Maintain aspect ratio # Maintain aspect ratio
print(f"New dimensions: {new_width}x{new_height}")  # Debugging

# Step 3: Resize the image without distortion (Use LANCZOS instead of ANTIALIAS)
resized_image = image.resize((new_width, new_height), Image.Resampling.LANCZOS)
resized_image.show()  # (Optional) Display resized image

# Step 4: Save the resized image
resized_image.save("san2.jpeg")
