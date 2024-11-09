const countries = [
    {"name": "Afghanistan", "lat": 33.9391, "lng": 67.71, "tiltAngle": 49.0, "avgSunAngle": 53.0},
    {"name": "Albania", "lat": 41.1533, "lng": 20.1683, "tiltAngle": 56.0, "avgSunAngle": 49.0},
    {"name": "Algeria", "lat": 28.0339, "lng": 1.6596, "tiltAngle": 43.0, "avgSunAngle": 55.0},
    {"name": "Andorra", "lat": 42.5063, "lng": 1.5211, "tiltAngle": 57.0, "avgSunAngle": 47.0},
    {"name": "Angola", "lat": -11.2027, "lng": 17.8739, "tiltAngle": 21.0, "avgSunAngle": 60.0},
    {"name": "Antigua and Barbuda", "lat": 17.0608, "lng": -61.7964, "tiltAngle": 32.0, "avgSunAngle": 58.0},
    {"name": "Argentina", "lat": -38.4161, "lng": -63.6167, "tiltAngle": 53.0, "avgSunAngle": 43.0},
    {"name": "Armenia", "lat": 40.0691, "lng": 45.0382, "tiltAngle": 54.0, "avgSunAngle": 47.0},
    {"name": "Australia", "lat": -25.2744, "lng": 133.7751, "tiltAngle": 40.0, "avgSunAngle": 52.0},
    {"name": "Austria", "lat": 47.5162, "lng": 14.5501, "tiltAngle": 61.0, "avgSunAngle": 44.0},
    {"name": "Azerbaijan", "lat": 40.1431, "lng": 47.5769, "tiltAngle": 54.0, "avgSunAngle": 50.0},
    {"name": "Bahamas", "lat": 25.0343, "lng": -77.3963, "tiltAngle": 40.0, "avgSunAngle": 58.0},
    {"name": "Bahrain", "lat": 26.0667, "lng": 50.5577, "tiltAngle": 41.0, "avgSunAngle": 58.0},
    {"name": "Bangladesh", "lat": 23.685, "lng": 90.3563, "tiltAngle": 38.0, "avgSunAngle": 58.0},
    {"name": "Barbados", "lat": 13.1939, "lng": -59.5432, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Belarus", "lat": 53.7098, "lng": 27.9534, "tiltAngle": 64.0, "avgSunAngle": 39.0},
    {"name": "Belgium", "lat": 50.5039, "lng": 4.4699, "tiltAngle": 64.0, "avgSunAngle": 43.0},
    {"name": "Belize", "lat": 17.1899, "lng": -88.4976, "tiltAngle": 32.0, "avgSunAngle": 60.0},
    {"name": "Benin", "lat": 9.3077, "lng": 2.3158, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Bhutan", "lat": 27.5142, "lng": 90.4336, "tiltAngle": 42.0, "avgSunAngle": 58.0},
    {"name": "Bolivia", "lat": -16.2902, "lng": -63.5887, "tiltAngle": 29.0, "avgSunAngle": 59.0},
    {"name": "Bosnia and Herzegovina", "lat": 43.9159, "lng": 17.6791, "tiltAngle": 58.0, "avgSunAngle": 44.0},
    {"name": "Botswana", "lat": -22.3285, "lng": 24.6849, "tiltAngle": 37.0, "avgSunAngle": 52.0},
    {"name": "Brazil", "lat": -14.235, "lng": -51.9253, "tiltAngle": 29.0, "avgSunAngle": 60.0},
    {"name": "Brunei", "lat": 4.5353, "lng": 114.7277, "tiltAngle": 15.0, "avgSunAngle": 60.0},
    {"name": "Bulgaria", "lat": 42.7339, "lng": 25.4858, "tiltAngle": 57.0, "avgSunAngle": 44.0},
    {"name": "Burkina Faso", "lat": 12.2383, "lng": -1.5616, "tiltAngle": 27.0, "avgSunAngle": 60.0},
    {"name": "Burundi", "lat": -3.3731, "lng": 29.9189, "tiltAngle": 10.0, "avgSunAngle": 57.0},
    {"name": "Cabo Verde", "lat": 16.5388, "lng": -23.0418, "tiltAngle": 31.0, "avgSunAngle": 58.0},
    {"name": "Cambodia", "lat": 12.5657, "lng": 104.991, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Cameroon", "lat": 3.848, "lng": 11.5021, "tiltAngle": 15.0, "avgSunAngle": 59.0},
    {"name": "Canada", "lat": 56.1304, "lng": -106.3468, "tiltAngle": 69.0, "avgSunAngle": 30.0},
    {"name": "Central African Republic", "lat": 6.6111, "lng": 20.9394, "tiltAngle": 18.0, "avgSunAngle": 60.0},
    {"name": "Chad", "lat": 15.4542, "lng": 18.7322, "tiltAngle": 30.0, "avgSunAngle": 60.0},
    {"name": "Chile", "lat": -35.6751, "lng": -71.543, "tiltAngle": 51.0, "avgSunAngle": 44.0},
    {"name": "China", "lat": 35.8617, "lng": 104.1954, "tiltAngle": 49.0, "avgSunAngle": 51.0},
    {"name": "Colombia", "lat": 4.5709, "lng": -74.2973, "tiltAngle": 15.0, "avgSunAngle": 59.0},
    {"name": "Comoros", "lat": -11.6455, "lng": 43.3333, "tiltAngle": 23.0, "avgSunAngle": 60.0},
    {"name": "Congo", "lat": -4.0383, "lng": 21.7587, "tiltAngle": 10.0, "avgSunAngle": 58.0},
    {"name": "Costa Rica", "lat": 9.7489, "lng": -83.7534, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Croatia", "lat": 45.1, "lng": 15.2, "tiltAngle": 59.0, "avgSunAngle": 43.0},
    {"name": "Cuba", "lat": 21.5218, "lng": -77.7812, "tiltAngle": 36.0, "avgSunAngle": 59.0},
    {"name": "Cyprus", "lat": 35.1264, "lng": 33.4299, "tiltAngle": 49.0, "avgSunAngle": 57.0},
    {"name": "Czech Republic", "lat": 49.8176, "lng": 15.473, "tiltAngle": 62.0, "avgSunAngle": 41.0},
    {"name": "Democratic Republic of the Congo", "lat": -4.0383, "lng": 21.7587, "tiltAngle": 15.0, "avgSunAngle": 59.0},
    {"name": "Denmark", "lat": 56.2639, "lng": 9.5018, "tiltAngle": 67.0, "avgSunAngle": 40.0},
    {"name": "Djibouti", "lat": 11.8251, "lng": 42.5903, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Dominica", "lat": 15.414, "lng": -61.3707, "tiltAngle": 38.0, "avgSunAngle": 58.0},
    {"name": "Dominican Republic", "lat": 18.7357, "lng": -70.1627, "tiltAngle": 32.0, "avgSunAngle": 59.0},
    {"name": "East Timor", "lat": -8.874, "lng": 125.7275, "tiltAngle": 30.0, "avgSunAngle": 58.0},
    {"name": "Ecuador", "lat": -1.8312, "lng": -78.1834, "tiltAngle": 23.0, "avgSunAngle": 62.0},
    {"name": "Egypt", "lat": 26.8206, "lng": 30.8025, "tiltAngle": 23.0, "avgSunAngle": 36.8},
    {"name": "El Salvador", "lat": 13.7942, "lng": -88.8965, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Equatorial Guinea", "lat": 1.6508, "lng": 10.2679, "tiltAngle": 22.0, "avgSunAngle": 59.0},
    {"name": "Eritrea", "lat": 15.1794, "lng": 39.7823, "tiltAngle": 20.0, "avgSunAngle": 59.0},
    {"name": "Estonia", "lat": 58.5953, "lng": 25.0136, "tiltAngle": 63.0, "avgSunAngle": 38.0},
    {"name": "Eswatini", "lat": -26.5225, "lng": 31.4659, "tiltAngle": 29.0, "avgSunAngle": 54.0},
    {"name": "Ethiopia", "lat": 9.145, "lng": 40.4897, "tiltAngle": 18.0, "avgSunAngle": 58.0},
    {"name": "Fiji", "lat": -17.7134, "lng": 178.065, "tiltAngle": 31.0, "avgSunAngle": 58.0},
    {"name": "Finland", "lat": 61.9241, "lng": 25.7482, "tiltAngle": 68.0, "avgSunAngle": 37.0},
    {"name": "France", "lat": 46.6034, "lng": 1.8883, "tiltAngle": 59.0, "avgSunAngle": 45.0},
    {"name": "Gabon", "lat": -0.8037, "lng": 11.6094, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Gambia", "lat": 13.4432, "lng": -15.3101, "tiltAngle": 32.0, "avgSunAngle": 59.0},
    {"name": "Georgia", "lat": 42.3154, "lng": 43.3569, "tiltAngle": 52.0, "avgSunAngle": 49.0},
    {"name": "Germany", "lat": 51.1657, "lng": 10.4515, "tiltAngle": 58.0, "avgSunAngle": 42.0},
    {"name": "Ghana", "lat": 7.9465, "lng": -1.0232, "tiltAngle": 20.0, "avgSunAngle": 59.0},
    {"name": "Greece", "lat": 39.0742, "lng": 21.8243, "tiltAngle": 52.0, "avgSunAngle": 49.0},
    {"name": "Grenada", "lat": 12.2628, "lng": -61.6042, "tiltAngle": 30.0, "avgSunAngle": 59.0},
    {"name": "Guatemala", "lat": 13.407, "lng": -90.678, "tiltAngle": 26.0, "avgSunAngle": 58.0},
    {"name": "Guinea", "lat": 9.9456, "lng": -9.6966, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Guinea-Bissau", "lat": 11.8037, "lng": -15.1804, "tiltAngle": 25.0, "avgSunAngle": 59.0},
    {"name": "Guyana", "lat": 4.8604, "lng": -58.9302, "tiltAngle": 28.0, "avgSunAngle": 59.0},
    {"name": "Haiti", "lat": 18.9712, "lng": -72.2852, "tiltAngle": 33.0, "avgSunAngle": 59.0},
    {"name": "Honduras", "lat": 13.943, "lng": -83.9568, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Hungary", "lat": 47.1625, "lng": 19.5033, "tiltAngle": 61.0, "avgSunAngle": 43.0},
    {"name": "Iceland", "lat": 64.9631, "lng": -19.0208, "tiltAngle": 70.0, "avgSunAngle": 35.0},
    {"name": "India", "lat": 20.5937, "lng": 78.9629, "tiltAngle": 23.0, "avgSunAngle": 56.0},
    {"name": "Indonesia", "lat": -0.7893, "lng": 113.9213, "tiltAngle": 25.0, "avgSunAngle": 59.0},
    {"name": "Iran", "lat": 32.4279, "lng": 53.688, "tiltAngle": 35.0, "avgSunAngle": 55.0},
    {"name": "Iraq", "lat": 33.2232, "lng": 43.6793, "tiltAngle": 33.0, "avgSunAngle": 55.0},
    {"name": "Ireland", "lat": 53.4129, "lng": -8.2439, "tiltAngle": 61.0, "avgSunAngle": 42.0},
    {"name": "Israel", "lat": 31.0461, "lng": 34.8516, "tiltAngle": 33.0, "avgSunAngle": 55.0},
    {"name": "Italy", "lat": 41.8719, "lng": 12.5674, "tiltAngle": 57.0, "avgSunAngle": 47.0},
    {"name": "Jamaica", "lat": 18.1096, "lng": -77.2975, "tiltAngle": 30.0, "avgSunAngle": 58.0},
    {"name": "Japan", "lat": 36.2048, "lng": 138.2529, "tiltAngle": 52.0, "avgSunAngle": 48.0},
    {"name": "Jordan", "lat": 30.5852, "lng": 36.2384, "tiltAngle": 32.0, "avgSunAngle": 55.0},
    {"name": "Kazakhstan", "lat": 48.0196, "lng": 66.9237, "tiltAngle": 60.0, "avgSunAngle": 41.0},
    {"name": "Kenya", "lat": -1.2921, "lng": 36.8219, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Kiribati", "lat": -3.3704, "lng": -168.734, "tiltAngle": 10.0, "avgSunAngle": 60.0},
    {"name": "Korea, North", "lat": 40.3399, "lng": 127.5101, "tiltAngle": 55.0, "avgSunAngle": 49.0},
    {"name": "Korea, South", "lat": 35.9078, "lng": 127.7669, "tiltAngle": 52.0, "avgSunAngle": 49.0},
    {"name": "Kuwait", "lat": 29.3759, "lng": 47.9774, "tiltAngle": 33.0, "avgSunAngle": 56.0},
    {"name": "Kyrgyzstan", "lat": 41.2044, "lng": 74.7661, "tiltAngle": 56.0, "avgSunAngle": 50.0},
    {"name": "Laos", "lat": 19.8563, "lng": 102.4955, "tiltAngle": 29.0, "avgSunAngle": 57.0},
    {"name": "Latvia", "lat": 56.8796, "lng": 24.6032, "tiltAngle": 64.0, "avgSunAngle": 40.0},
    {"name": "Lebanon", "lat": 33.8547, "lng": 35.8623, "tiltAngle": 39.0, "avgSunAngle": 53.0},
    {"name": "Lesotho", "lat": -29.6098, "lng": 28.2336, "tiltAngle": 34.0, "avgSunAngle": 52.0},
    {"name": "Liberia", "lat": 9.4295, "lng": -9.4295, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Libya", "lat": 26.3351, "lng": 17.2283, "tiltAngle": 31.0, "avgSunAngle": 55.0},
    {"name": "Liechtenstein", "lat": 47.1415, "lng": 9.5215, "tiltAngle": 56.0, "avgSunAngle": 44.0},
    {"name": "Lithuania", "lat": 55.1694, "lng": 23.8813, "tiltAngle": 64.0, "avgSunAngle": 41.0},
    {"name": "Luxembourg", "lat": 49.6117, "lng": 6.13, "tiltAngle": 61.0, "avgSunAngle": 42.0},
    {"name": "Madagascar", "lat": -18.7669, "lng": 46.8691, "tiltAngle": 30.0, "avgSunAngle": 58.0},
    {"name": "Malawi", "lat": -13.2543, "lng": 34.3015, "tiltAngle": 29.0, "avgSunAngle": 54.0},
    {"name": "Malaysia", "lat": 4.2105, "lng": 101.9758, "tiltAngle": 20.0, "avgSunAngle": 58.0},
    {"name": "Maldives", "lat": 3.2028, "lng": 73.2207, "tiltAngle": 21.0, "avgSunAngle": 60.0},
    {"name": "Mali", "lat": 17.5707, "lng": -3.9962, "tiltAngle": 23.0, "avgSunAngle": 60.0},
    {"name": "Malta", "lat": 35.9375, "lng": 14.3754, "tiltAngle": 47.0, "avgSunAngle": 55.0},
    {"name": "Marshall Islands", "lat": 7.1315, "lng": 171.1845, "tiltAngle": 10.0, "avgSunAngle": 60.0},
    {"name": "Mauritania", "lat": 21.0079, "lng": -10.9408, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Mauritius", "lat": -20.3484, "lng": 57.5522, "tiltAngle": 23.0, "avgSunAngle": 58.0},
    {"name": "Mexico", "lat": 23.6345, "lng": -102.5528, "tiltAngle": 25.0, "avgSunAngle": 59.0},
    {"name": "Micronesia", "lat": 7.4256, "lng": 150.5508, "tiltAngle": 15.0, "avgSunAngle": 60.0},
    {"name": "Moldova", "lat": 47.4116, "lng": 28.3699, "tiltAngle": 60.0, "avgSunAngle": 44.0},
    {"name": "Monaco", "lat": 43.7333, "lng": 7.4167, "tiltAngle": 49.0, "avgSunAngle": 47.0},
    {"name": "Mongolia", "lat": 46.8625, "lng": 103.8467, "tiltAngle": 60.0, "avgSunAngle": 41.0},
    {"name": "Montenegro", "lat": 42.7087, "lng": 19.3744, "tiltAngle": 56.0, "avgSunAngle": 47.0},
    {"name": "Morocco", "lat": 31.7917, "lng": -7.0926, "tiltAngle": 38.0, "avgSunAngle": 55.0},
    {"name": "Mozambique", "lat": -18.6657, "lng": 35.5296, "tiltAngle": 22.0, "avgSunAngle": 58.0},
    {"name": "Myanmar", "lat": 21.9139, "lng": 95.956, "tiltAngle": 25.0, "avgSunAngle": 58.0},
    {"name": "Namibia", "lat": -22.9576, "lng": 18.4904, "tiltAngle": 36.0, "avgSunAngle": 53.0},
    {"name": "Nauru", "lat": -0.5228, "lng": 166.9315, "tiltAngle": 15.0, "avgSunAngle": 60.0},
    {"name": "Nepal", "lat": 28.3949, "lng": 84.124, "tiltAngle": 43.0, "avgSunAngle": 55.0},
    {"name": "Netherlands", "lat": 52.1326, "lng": 5.2913, "tiltAngle": 63.0, "avgSunAngle": 41.0},
    {"name": "New Zealand", "lat": -40.9006, "lng": 174.886, "tiltAngle": 41.0, "avgSunAngle": 52.0},
    {"name": "Nicaragua", "lat": 12.8654, "lng": -85.2072, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Niger", "lat": 17.6078, "lng": 8.0817, "tiltAngle": 20.0, "avgSunAngle": 60.0},
    {"name": "Nigeria", "lat": 9.082, "lng": 8.6753, "tiltAngle": 20.0, "avgSunAngle": 59.0},
    {"name": "North Macedonia", "lat": 41.6086, "lng": 21.7453, "tiltAngle": 58.0, "avgSunAngle": 44.0},
    {"name": "Norway", "lat": 60.472, "lng": 8.4689, "tiltAngle": 70.0, "avgSunAngle": 38.0},
    {"name": "Oman", "lat": 21.256, "lng": 55.2962, "tiltAngle": 35.0, "avgSunAngle": 56.0},
    {"name": "Pakistan", "lat": 30.3753, "lng": 69.3451, "tiltAngle": 36.0, "avgSunAngle": 55.0},
    {"name": "Palau", "lat": 7.5149, "lng": 134.5825, "tiltAngle": 10.0, "avgSunAngle": 60.0},
    {"name": "Panama", "lat": 8.5375, "lng": -80.7821, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Papua New Guinea", "lat": -6.3149, "lng": 143.9555, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Paraguay", "lat": -23.4425, "lng": -58.4438, "tiltAngle": 26.0, "avgSunAngle": 58.0},
    {"name": "Peru", "lat": -9.19, "lng": -75.0152, "tiltAngle": 23.0, "avgSunAngle": 60.0},
    {"name": "Philippines", "lat": 12.8797, "lng": 121.774, "tiltAngle": 25.0, "avgSunAngle": 59.0},
    {"name": "Poland", "lat": 51.9194, "lng": 19.1451, "tiltAngle": 57.0, "avgSunAngle": 44.0},
    {"name": "Portugal", "lat": 39.3999, "lng": -8.2245, "tiltAngle": 53.0, "avgSunAngle": 46.0},
    {"name": "Qatar", "lat": 25.3548, "lng": 51.1839, "tiltAngle": 31.0, "avgSunAngle": 55.0},
    {"name": "Romania", "lat": 45.9432, "lng": 24.9668, "tiltAngle": 58.0, "avgSunAngle": 44.0},
    {"name": "Russia", "lat": 55.7558, "lng": 37.6173, "tiltAngle": 62.0, "avgSunAngle": 40.0},
    {"name": "Rwanda", "lat": -1.9403, "lng": 29.8739, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Saint Kitts and Nevis", "lat": 17.3578, "lng": -62.782, "tiltAngle": 29.0, "avgSunAngle": 59.0},
    {"name": "Saint Lucia", "lat": 13.9094, "lng": -60.9785, "tiltAngle": 29.0, "avgSunAngle": 59.0},
    {"name": "Saint Vincent and the Grenadines", "lat": 12.9843, "lng": -61.2872, "tiltAngle": 29.0, "avgSunAngle": 59.0},
    {"name": "Samoa", "lat": -13.759, "lng": -172.1046, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "San Marino", "lat": 43.9333, "lng": 12.45, "tiltAngle": 55.0, "avgSunAngle": 46.0},
    {"name": "Sao Tome and Principe", "lat": 0.1864, "lng": 6.6131, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Saudi Arabia", "lat": 23.8859, "lng": 45.0792, "tiltAngle": 34.0, "avgSunAngle": 56.0},
    {"name": "Senegal", "lat": 14.4974, "lng": -14.4524, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Serbia", "lat": 44.0165, "lng": 21.0059, "tiltAngle": 57.0, "avgSunAngle": 44.0},
    {"name": "Seychelles", "lat": -4.6796, "lng": 55.4915, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Sierra Leone", "lat": 8.4606, "lng": -11.7799, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Singapore", "lat": 1.3521, "lng": 103.8198, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Slovakia", "lat": 48.669, "lng": 19.699, "tiltAngle": 59.0, "avgSunAngle": 43.0},
    {"name": "Slovenia", "lat": 46.1511, "lng": 14.9955, "tiltAngle": 56.0, "avgSunAngle": 45.0},
    {"name": "Solomon Islands", "lat": -9.4295, "lng": 160.0147, "tiltAngle": 22.0, "avgSunAngle": 59.0},
    {"name": "Somalia", "lat": 5.1521, "lng": 46.1996, "tiltAngle": 22.0, "avgSunAngle": 59.0},
    {"name": "South Africa", "lat": -30.5595, "lng": 22.9375, "tiltAngle": 34.0, "avgSunAngle": 52.0},
    {"name": "South Korea", "lat": 35.9078, "lng": 127.7669, "tiltAngle": 52.0, "avgSunAngle": 49.0},
    {"name": "South Sudan", "lat": 6.8777, "lng": 31.307, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Spain", "lat": 40.4637, "lng": -3.7492, "tiltAngle": 55.0, "avgSunAngle": 47.0},
    {"name": "Sri Lanka", "lat": 7.8731, "lng": 80.7718, "tiltAngle": 26.0, "avgSunAngle": 58.0},
    {"name": "Sudan", "lat": 12.8628, "lng": 30.8025, "tiltAngle": 24.0, "avgSunAngle": 58.0},
    {"name": "Suriname", "lat": 3.9193, "lng": -56.0278, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Sweden", "lat": 60.1282, "lng": 18.6435, "tiltAngle": 63.0, "avgSunAngle": 40.0},
    {"name": "Switzerland", "lat": 46.8182, "lng": 8.2275, "tiltAngle": 57.0, "avgSunAngle": 45.0},
    {"name": "Syria", "lat": 34.8021, "lng": 38.9968, "tiltAngle": 36.0, "avgSunAngle": 54.0},
    {"name": "Taiwan", "lat": 23.6978, "lng": 120.9605, "tiltAngle": 50.0, "avgSunAngle": 49.0},
    {"name": "Tajikistan", "lat": 38.861, "lng": 71.2761, "tiltAngle": 56.0, "avgSunAngle": 49.0},
    {"name": "Tanzania", "lat": -6.369028, "lng": 34.888822, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Thailand", "lat": 15.8700, "lng": 100.9925, "tiltAngle": 25.0, "avgSunAngle": 59.0},
    {"name": "Togo", "lat": 8.6195, "lng": 0.8248, "tiltAngle": 24.0, "avgSunAngle": 59.0},
    {"name": "Tonga", "lat": -21.1785, "lng": -175.1982, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Trinidad and Tobago", "lat": 10.6918, "lng": -61.2225, "tiltAngle": 28.0, "avgSunAngle": 59.0},
    {"name": "Tunisia", "lat": 33.8869, "lng": 9.5375, "tiltAngle": 32.0, "avgSunAngle": 55.0},
    {"name": "Turkey", "lat": 38.9637, "lng": 35.2433, "tiltAngle": 55.0, "avgSunAngle": 46.0},
    {"name": "Turkmenistan", "lat": 38.9697, "lng": 59.5563, "tiltAngle": 56.0, "avgSunAngle": 49.0},
    {"name": "Tuvalu", "lat": -7.1095, "lng": 179.194, "tiltAngle": 10.0, "avgSunAngle": 60.0},
    {"name": "Uganda", "lat": 1.3733, "lng": 32.2903, "tiltAngle": 23.0, "avgSunAngle": 59.0},
    {"name": "Ukraine", "lat": 48.3794, "lng": 31.1656, "tiltAngle": 59.0, "avgSunAngle": 43.0},
    {"name": "United Arab Emirates", "lat": 23.4241, "lng": 53.8478, "tiltAngle": 34.0, "avgSunAngle": 56.0},
    {"name": "United Kingdom", "lat": 55.3781, "lng": -3.436, "tiltAngle": 62.0, "avgSunAngle": 40.0},
    {"name": "United States", "lat": 37.0902, "lng": -95.7129, "tiltAngle": 23.0, "avgSunAngle": 55.0},
    {"name": "Uruguay", "lat": -32.1656, "lng": -58.4438, "tiltAngle": 26.0, "avgSunAngle": 58.0},
    {"name": "Uzbekistan", "lat": 41.3775, "lng": 64.5853, "tiltAngle": 56.0, "avgSunAngle": 49.0},
    {"name": "Vanuatu", "lat": -15.3767, "lng": 166.9592, "tiltAngle": 25.0, "avgSunAngle": 58.0},
    {"name": "Vatican City", "lat": 41.9029, "lng": 12.4534, "tiltAngle": 56.0, "avgSunAngle": 44.0},
    {"name": "Venezuela", "lat": 6.4238, "lng": -66.5897, "tiltAngle": 23.0, "avgSunAngle": 60.0},
    {"name": "Vietnam", "lat": 14.0583, "lng": 108.2772, "tiltAngle": 25.0, "avgSunAngle": 58.0},
    {"name": "Yemen", "lat": 15.5527, "lng": 48.5164, "tiltAngle": 34.0, "avgSunAngle": 56.0},
    {"name": "Zambia", "lat": -13.1339, "lng": 27.8493, "tiltAngle": 28.0, "avgSunAngle": 58.0},
    {"name": "Zimbabwe", "lat": -19.0154, "lng": 29.1549, "tiltAngle": 30.0, "avgSunAngle": 57.0}
  ];
 
  // دوال لتغيير النصوص حسب اللغة
  const texts = {
    en: {
      title: "Elbadry Solar Support",
      description: "Calculate solar panel tilt angle and shadow avoidance angle for any country in the world",
      searchPlaceholder: "Search for a country...",
      searchButton: "Search",
      selectLabel: "Select Country:",
      latLabel: "Latitude:",
      lngLabel: "Longitude:",
      tiltAngleLabel: "Solar Panel Tilt Angle:",
      avgSunAngleLabel: "Shadow Avoidance Angle:",
      footerText: "© 2024 Elbadry Solar Support",
      toggleButton: "العربية"
    },
    ar: {
      title: "دعم البدري للطاقة الشمسية",
      description: "احسب زاوية تثبيت الألواح الشمسية وزاوية تفادي الظلال لأي دولة في العالم",
      searchPlaceholder: "ابحث عن دولة...",
      searchButton: "بحث",
      selectLabel: "اختر الدولة:",
      latLabel: "زاوية خط العرض:",
      lngLabel: "زاوية خط الطول:",
      tiltAngleLabel: "زاوية تثبيت الألواح الشمسية:",
      avgSunAngleLabel: "زاوية تفادي الظلال:",
      footerText: "حقوق الطبع والنشر © 2024 دعم البدري للطاقة الشمسية",
      toggleButton: "English"
    }
  };
  
  // اللغة الافتراضية
  let currentLang = 'ar';
  
  // دالة لتغيير النصوص في الصفحة
  function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('title').textContent = texts[lang].title;
    document.getElementById('description').textContent = texts[lang].description;
    document.getElementById('searchInput').placeholder = texts[lang].searchPlaceholder;
    document.getElementById('searchButton').textContent = texts[lang].searchButton;
    document.getElementById('selectLabel').textContent = texts[lang].selectLabel;
    document.getElementById('latLabel').textContent = texts[lang].latLabel;
    document.getElementById('lngLabel').textContent = texts[lang].lngLabel;
    document.getElementById('tiltAngleLabel').textContent = texts[lang].tiltAngleLabel;
    document.getElementById('avgSunAngleLabel').textContent = texts[lang].avgSunAngleLabel;
    document.getElementById('footerText').textContent = texts[lang].footerText;
    document.getElementById('toggleLangBtn').textContent = texts[lang].toggleButton;
  }
  
  // دالة لتبديل اللغة عند الضغط على الزر
  function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  }
  // دالة لعرض الوقت والتاريخ
function updateDateTime() {
  const now = new Date();

  // الحصول على الوقت
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  // الحصول على التاريخ
  const day = now.getDate();
  const month = now.getMonth() + 1; // الأشهر تبدأ من 0
  const year = now.getFullYear();
  const date = `${day}/${month}/${year}`;

  // تحديث واجهة الموقع
  document.getElementById('time').textContent = time;
  document.getElementById('date').textContent = date;
}

// تحديث الوقت والتاريخ كل ثانية
setInterval(updateDateTime, 1000);
  // تهيئة الصفحة على اللغة الافتراضية
  window.onload = () => {
    populateCountries();
    setLanguage(currentLang);
  };
// دالة تعبئة قائمة الدول عند تحميل الصفحة
function populateCountries() {
    const select = document.getElementById('countrySelect');
    select.innerHTML = ''; // مسح الخيارات السابقة
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      select.appendChild(option);
    });
}

// دالة تحديث قائمة الدول وعرض النتائج عند البحث
function searchCountry() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm));

    // تحديث قائمة الدول في الـ select
    const select = document.getElementById('countrySelect');
    select.innerHTML = ''; // مسح الخيارات السابقة
    filteredCountries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name;
      option.textContent = country.name;
      select.appendChild(option);
    });

    // إذا كانت القائمة فارغة، عرض رسالة للمستخدم
    if (filteredCountries.length === 0) {
      const option = document.createElement('option');
      option.value = "";
      option.textContent = "لا توجد دول مطابقة";
      select.appendChild(option);
    } else if (filteredCountries.length === 1) {
      // إذا كان هناك دولة واحدة مطابقة، عرض بياناتها مباشرة
      displayCountryData(filteredCountries[0]);
    }
}

// دالة لحساب زوايا الألواح الشمسية بناءً على الدولة المختارة
function calculateSolarAngles() {
    const selectedCountry = document.getElementById('countrySelect').value;
    const country = countries.find(c => c.name === selectedCountry);

    if (country) {
      displayCountryData(country);
    }
}

// دالة لعرض بيانات الدولة في عناصر HTML
function displayCountryData(country) {
    document.getElementById('lat').textContent = country.lat;
    document.getElementById('lng').textContent = country.lng;
    document.getElementById('tiltAngle').textContent = country.tiltAngle;
    document.getElementById('avgSunAngle').textContent = country.avgSunAngle;
}

// تفعيل البحث عند الضغط على زر Enter
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // منع السلوك الافتراضي للنموذج
        searchCountry();        // استدعاء دالة البحث
    }
});

// استدعاء دالة البحث عند الضغط على زر "بحث"
document.getElementById("searchButton").addEventListener("click", searchCountry);

// تعبئة الدول عند تحميل الصفحة
window.onload = populateCountries;