# goolocations

# Google Takeout Geolocation Parser and Visualizer
--------------------------------------------------
by Dott. Ing. Antonio (Roberto) CONSALVI
--------------------------------------------------
rconsalvi
rconsalvi@gmail.com
www.consalvi.cloud
Italy
--------------------------------------------------

## Overview

This project is a **parser for Google Takeout geolocation files** that provides a **graphical representation** of positions and related information. 
It uses **OpenStreetMap (OSM)** to display **markers on road or satellite maps** and allows users to visualize the geolocation data captured by Google services. 

Users can **filter the displayed information** based on various parameters, such as:
- **Time interval** of observation
- **Survey precision** (accuracy of the geolocation)

Additionally, the **markers**, which can be customized (e.g., car, bicycle, truck, motorbike, person), are oriented to reflect the **actual heading** detected during the survey.

## Features

- **Parse Google Takeout Geolocation Data**: Extract and interpret geolocation data from Google Takeout JSON files.
- **Interactive Map Visualization**: Display positions on road or satellite maps using OpenStreetMap (OSM).
- **Marker Customization**: Choose between different marker types (e.g., car, bicycle, truck, motorbike, person) to represent positions on the map.
- **Realistic Marker Orientation**: Markers are automatically oriented based on the actual heading detected in the geolocation data.
- **Filtering Capabilities**: Filter the displayed data based on:
  - Time intervals (start and end times)
  - Survey precision (accuracy)
- **Zoom and Pan**: Explore different areas of the map easily with zoom and pan functionality.

## Usage

### Prerequisites

- Node.js (for running JavaScript code if the parser is a server-side application)
- Leaflet.js (for map rendering)
- jQuery (optional, depending on your frontend implementation)
- Google Takeout Geolocation data in JSON format

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/rconsalvi/goolocations.git
   cd goolocations
   ```

2. Install dependencies (if applicable):
   ```bash
   npm install
   ```

3. Run the parser and launch the visualization interface:
   ```bash
   npm start
   ```

4. Open the application in your browser to start parsing and visualizing geolocation data.

### How to Use

1. **Upload Google Takeout Geolocation File**: Start by uploading the Google Takeout geolocation JSON file (the map moves, from a bird's eye view, in the geographical area to which the geolocations refer).
2. **Filter Data**: Use the available options to filter data by time intervals or by survey precision.
3. **View on Map**: Press the "Marker statici" button, the filtered data will be displayed on an OSM map with customizable markers oriented according to their actual heading.
4. **Interactive Exploration**: You can click on each marker for more information, such as time of observation, GPS coordinates, and accuracy.

## Marker Customization

Available markers:
- **Car**
- **Bicycle**
- **Truck**
- **Motorbike**
- **Person**

The markers are customizable, and additional marker types can be added with ease.

## Filtering Options

You can filter the displayed geolocation data based on:
- **Time Interval**: Specify a start and end time to view data only from a certain time period.
- **Survey Precision**: Set a precision threshold to display only positions with a certain level of accuracy.

## Technologies Used

- **JavaScript**
- **Leaflet.js** for map rendering
- **OpenStreetMap** for geolocation display
- **Google Takeout Geolocation JSON** as input data
- **Bootstrap** (optional) for UI styling

## Future Improvements

- Add more marker types for additional forms of transportation (e.g., train, airplane).
- Support for more file formats besides Google Takeout JSON (e.g., GPX, KML).
- Enhance performance for large datasets.
- Provide more advanced filtering options (e.g., filtering by country or city).

## Contributing

Feel free to open issues or submit pull requests if you'd like to contribute to this project. All contributions are welcome!

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. You can view the full license at (https://creativecommons.org/licenses/by-nc/4.0/legalcode).


---

Let me know if you'd like any changes or additions!
