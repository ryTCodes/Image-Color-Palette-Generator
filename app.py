from PIL import Image, ImageOps
import numpy as np
from flask import Flask, render_template, request

app = Flask(__name__)


def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(int(rgb[0]), int(rgb[1]), int(rgb[2]))


def get_color_info(image_file):
    image = Image.open(image_file).convert('RGB')
    max_dim = max(image.size[0], image.size[1])
    if max_dim >= 1200:
        image = ImageOps.scale(image=image, factor=0.2)
    elif max_dim >= 800:
        image = ImageOps.scale(image=image, factor=0.3)
    elif max_dim >= 400:
        image = ImageOps.scale(image=image, factor=0.4)

    image = ImageOps.posterize(image, 2)
    img_data = np.array(image)
    # print(img_data.shape)

    freq_list = {}
    for values in img_data:
        for rgb in values:
            rgb_tuple = tuple(rgb)
            if rgb_tuple not in freq_list:
                freq_list[rgb_tuple] = 0
            if rgb_tuple in freq_list:
                freq_list[rgb_tuple] += 1

    sorted_values = dict(sorted(freq_list.items(), key=lambda x: x[1], reverse=True))
    # print(sorted_values)
    color_info = []
    for color, frequency in sorted_values.items():
        rgb = f"rgb({color[0]}, {color[1]}, {color[2]})"
        hex = rgb_to_hex(color)
        color_info.append({
            'rgb': rgb,
            'hex': hex
        })
    # print(color_info)
    return color_info[:12]


@app.route('/', methods=['GET', 'POST'])
def home_view():
    if request.method == 'POST':
        if 'file' not in request.files:
            return render_template('index.html')
        file = request.files['file']
        if file.filename == '':
            return render_template('index.html')
        if file:
            color_info = get_color_info(file)
            return render_template('index.html', colors=color_info)
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
