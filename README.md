# Image Color Palette Generator

The **Image Color Palette Generator** is a Python-based tool that extracts a color palette from an input image. It provides the HEX and RGB codes of the generated color palette. This tool is perfect for designers, developers, or anyone looking to generate visually appealing color schemes from images.

---

## 🎨 Features
- Extract 12 dominant colours from any image
- Generates a color palette with RGB and HEX Codes
- Simple and intuitive interface

---

## 🛠️ Technologies Used
- Python: For the backend logic.
- Pillow (PIL): For image processing.
- Flask: To create a web interface.
- NumPy: For efficient computations.

---

## 📸 Demo

Here's how the tool works:

1. Upload an image.
2. The tool processes the image and generates the dominant color palette.
3. The color palette is generated with RGB and HEX codes.

---

## 🚀 Installation

Follow these steps to set up and run the project locally:

### Prerequisites
- Python 3.8 or higher
- pip package manager
- Virtual environment (optional but recommended)

### Steps
1. **Clone the repository**:
  ```bash
  git clone https://github.com/ryTCodes/Image-Color-Palette-Generator.git
  cd Image-Color-Palette-Generator 
  ```

2. **Create a Virtual Environment (Optional but Recommended)**:
  ```bash
  python -m venv .venv
  source .venv/bin/activate   # On Windows, use .venv\Scripts\activate
  ```

3. **Install Dependencies**:
  ```bash
  pip install -r requirements.txt
  ```

4. Run the application:
  ```bash
  python app.py
  ```

5. Open your browser and go to:
  ```arduino
  http://127.0.0.1:5000/
  ```

5. Tailwind CSS Setup (If Tailwind CSS is not loading properly): Run the following command to process the Tailwind CSS styles:
  ```bash
  npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch
  ```

