import re

md_path = r"C:\Users\ferra\DevProjects\Garrett-Ferrara-GitHubPage\texts\LLM_Inquiry_1.md"

with open(md_path, 'r', encoding='utf-8') as f:
    content = f.read()

# New VADER sentiment data for PIR codes
new_sentiment_pir_data = '''const sentimentByPIR = {
  "1.01.001": {"Home Depot": {"Anthropic": -0.949, "DeepSeek": -0.993, "OpenAI": -0.729}, "Lowe's": {"Anthropic": -0.929, "DeepSeek": -0.989, "OpenAI": 0.144}},
  "1.01.002": {"Home Depot": {"Anthropic": -0.850, "DeepSeek": -0.901, "OpenAI": -0.034}, "Lowe's": {"Anthropic": 0.040, "DeepSeek": -0.875, "OpenAI": -0.949}},
  "1.01.003": {"Home Depot": {"Anthropic": -0.767, "DeepSeek": -0.998, "OpenAI": -0.328}, "Lowe's": {"Anthropic": -0.912, "DeepSeek": -0.997, "OpenAI": -0.807}},
  "1.01.004": {"Home Depot": {"Anthropic": -0.970, "DeepSeek": -0.998, "OpenAI": 0.146}, "Lowe's": {"Anthropic": -0.969, "DeepSeek": -0.997, "OpenAI": -0.923}},
  "1.01.005": {"Home Depot": {"Anthropic": -0.794, "DeepSeek": -0.952, "OpenAI": -0.028}, "Lowe's": {"Anthropic": -0.971, "DeepSeek": -0.756, "OpenAI": -0.105}},
  "1.01.006": {"Home Depot": {"Anthropic": 0.344, "DeepSeek": -0.771, "OpenAI": -0.347}, "Lowe's": {"Anthropic": 0.201, "DeepSeek": -0.876, "OpenAI": -0.447}},
  "1.01.007": {"Home Depot": {"Anthropic": -0.878, "DeepSeek": -0.982, "OpenAI": -0.624}, "Lowe's": {"Anthropic": 0.717, "DeepSeek": -0.902, "OpenAI": -0.218}},
  "1.01.008": {"Home Depot": {"Anthropic": 0.033, "DeepSeek": -0.995, "OpenAI": 0.290}, "Lowe's": {"Anthropic": -0.736, "DeepSeek": -0.983, "OpenAI": 0.336}},
  "1.01.009": {"Home Depot": {"Anthropic": -0.438, "DeepSeek": -0.986, "OpenAI": -0.884}, "Lowe's": {"Anthropic": -0.637, "DeepSeek": -0.992, "OpenAI": 0.800}},
  "1.01.010": {"Home Depot": {"Anthropic": -0.834, "DeepSeek": -0.955, "OpenAI": -0.090}, "Lowe's": {"Anthropic": -0.806, "DeepSeek": -0.901, "OpenAI": -0.841}},
  "1.01.011": {"Home Depot": {"Anthropic": 0.764, "DeepSeek": 0.006, "OpenAI": 0.413}, "Lowe's": {"Anthropic": 0.132, "DeepSeek": -0.837, "OpenAI": -0.102}},
  "1.01.012": {"Home Depot": {"Anthropic": -0.158, "DeepSeek": -0.993, "OpenAI": -0.748}, "Lowe's": {"Anthropic": -0.979, "DeepSeek": -0.992, "OpenAI": -0.849}},
  "1.01.013": {"Home Depot": {"Anthropic": -0.868, "DeepSeek": -0.989, "OpenAI": -0.791}, "Lowe's": {"Anthropic": -0.597, "DeepSeek": -0.990, "OpenAI": -0.909}},
  "1.01.014": {"Home Depot": {"Anthropic": -0.865, "DeepSeek": -0.973, "OpenAI": 0.714}, "Lowe's": {"Anthropic": -0.797, "DeepSeek": -0.715, "OpenAI": 0.870}},
  "1.01.015": {"Home Depot": {"Anthropic": -0.990, "DeepSeek": -0.119, "OpenAI": 0.956}, "Lowe's": {"Anthropic": -0.984, "DeepSeek": -0.904, "OpenAI": 0.016}},
  "1.01.016": {"Home Depot": {"Anthropic": 0.711, "DeepSeek": -0.971, "OpenAI": -0.859}, "Lowe's": {"Anthropic": 0.447, "DeepSeek": -0.764, "OpenAI": -0.598}},
  "1.01.017": {"Home Depot": {"Anthropic": -0.908, "DeepSeek": -0.998, "OpenAI": -0.910}, "Lowe's": {"Anthropic": -0.261, "DeepSeek": -0.999, "OpenAI": -0.024}},
  "1.01.018": {"Home Depot": {"Anthropic": -0.318, "DeepSeek": -0.925, "OpenAI": -0.107}, "Lowe's": {"Anthropic": -0.077, "DeepSeek": -0.707, "OpenAI": -0.716}},
  "1.01.019": {"Home Depot": {"Anthropic": -0.853, "DeepSeek": -0.992, "OpenAI": -0.980}, "Lowe's": {"Anthropic": -0.988, "DeepSeek": -0.995, "OpenAI": -0.924}},
  "1.01.020": {"Home Depot": {"Anthropic": -0.403, "DeepSeek": -0.932, "OpenAI": -0.025}, "Lowe's": {"Anthropic": -0.789, "DeepSeek": -0.919, "OpenAI": 0.882}},
  "1.02.001": {"Home Depot": {"Anthropic": -0.782, "DeepSeek": -0.179, "OpenAI": -0.958}, "Lowe's": {"Anthropic": -0.670, "DeepSeek": -0.928, "OpenAI": -0.976}},
  "1.02.002": {"Home Depot": {"Anthropic": -0.929, "DeepSeek": -0.809, "OpenAI": -0.057}, "Lowe's": {"Anthropic": -0.892, "DeepSeek": -0.301, "OpenAI": -0.608}},
  "1.02.003": {"Home Depot": {"Anthropic": 0.651, "DeepSeek": -0.713, "OpenAI": -0.017}, "Lowe's": {"Anthropic": 0.453, "DeepSeek": -0.195, "OpenAI": -0.953}},
  "1.02.004": {"Home Depot": {"Anthropic": -0.812, "DeepSeek": -0.992, "OpenAI": -0.986}, "Lowe's": {"Anthropic": -0.974, "DeepSeek": -0.931, "OpenAI": -0.989}},
  "1.02.005": {"Home Depot": {"Anthropic": -0.838, "DeepSeek": -0.981, "OpenAI": -0.884}, "Lowe's": {"Anthropic": -0.234, "DeepSeek": -0.969, "OpenAI": -0.968}},
  "1.02.006": {"Home Depot": {"Anthropic": 0.275, "DeepSeek": 0.864, "OpenAI": 0.985}, "Lowe's": {"Anthropic": 0.928, "DeepSeek": 0.366, "OpenAI": 0.985}},
  "1.02.007": {"Home Depot": {"Anthropic": -0.543, "DeepSeek": -0.892, "OpenAI": -0.165}, "Lowe's": {"Anthropic": -0.172, "DeepSeek": -0.971, "OpenAI": -0.732}},
  "1.02.008": {"Home Depot": {"Anthropic": -0.863, "DeepSeek": -0.986, "OpenAI": 0.124}, "Lowe's": {"Anthropic": -0.750, "DeepSeek": 0.025, "OpenAI": -0.594}},
  "1.02.009": {"Home Depot": {"Anthropic": 0.032, "DeepSeek": -0.750, "OpenAI": -0.101}, "Lowe's": {"Anthropic": 0.009, "DeepSeek": 0.069, "OpenAI": 0.499}},
  "1.02.010": {"Home Depot": {"Anthropic": 0.529, "DeepSeek": 0.957, "OpenAI": 0.885}, "Lowe's": {"Anthropic": -0.600, "DeepSeek": 0.996, "OpenAI": 0.873}},
  "1.02.011": {"Home Depot": {"Anthropic": -0.646, "DeepSeek": -0.983, "OpenAI": -0.256}, "Lowe's": {"Anthropic": -0.699, "DeepSeek": -0.942, "OpenAI": -0.954}},
  "1.02.012": {"Home Depot": {"Anthropic": 0.532, "DeepSeek": -0.000, "OpenAI": -0.475}, "Lowe's": {"Anthropic": 0.468, "DeepSeek": -0.717, "OpenAI": -0.375}},
  "1.02.013": {"Home Depot": {"Anthropic": 0.818, "DeepSeek": -0.978, "OpenAI": 0.794}, "Lowe's": {"Anthropic": 0.884, "DeepSeek": -0.750, "OpenAI": 0.364}},
  "1.02.014": {"Home Depot": {"Anthropic": -0.236, "DeepSeek": 0.114, "OpenAI": -0.694}, "Lowe's": {"Anthropic": -0.927, "DeepSeek": -0.950, "OpenAI": -0.982}},
  "1.02.015": {"Home Depot": {"Anthropic": 0.627, "DeepSeek": -0.672, "OpenAI": -0.311}, "Lowe's": {"Anthropic": 0.571, "DeepSeek": -0.525, "OpenAI": -0.204}},
  "1.02.016": {"Home Depot": {"Anthropic": 0.724, "DeepSeek": -0.933, "OpenAI": -0.304}, "Lowe's": {"Anthropic": -0.057, "DeepSeek": 0.013, "OpenAI": 0.790}},
  "1.02.017": {"Home Depot": {"Anthropic": -0.257, "DeepSeek": -0.674, "OpenAI": -0.488}, "Lowe's": {"Anthropic": -0.111, "DeepSeek": -0.891, "OpenAI": 0.036}},
  "1.02.018": {"Home Depot": {"Anthropic": -0.910, "DeepSeek": -0.087, "OpenAI": -0.616}, "Lowe's": {"Anthropic": -0.198, "DeepSeek": 0.003, "OpenAI": -0.955}},
  "1.02.019": {"Home Depot": {"Anthropic": -0.457, "DeepSeek": -0.985, "OpenAI": 0.019}, "Lowe's": {"Anthropic": -0.327, "DeepSeek": -0.893, "OpenAI": -0.820}},
  "1.02.020": {"Home Depot": {"Anthropic": -0.650, "DeepSeek": -0.920, "OpenAI": -0.005}, "Lowe's": {"Anthropic": -0.845, "DeepSeek": -0.995, "OpenAI": -0.943}},
  "1.02.021": {"Home Depot": {"Anthropic": 0.975, "DeepSeek": 0.901, "OpenAI": 0.955}, "Lowe's": {"Anthropic": 0.993, "DeepSeek": 0.996, "OpenAI": 0.992}},
  "1.02.022": {"Home Depot": {"Anthropic": -0.701, "DeepSeek": -0.985, "OpenAI": -0.775}, "Lowe's": {"Anthropic": -0.343, "DeepSeek": -0.956, "OpenAI": -0.768}},
  "1.02.023": {"Home Depot": {"Anthropic": -0.915, "DeepSeek": -0.965, "OpenAI": -0.897}, "Lowe's": {"Anthropic": -0.511, "DeepSeek": -0.995, "OpenAI": -0.988}},
  "1.02.024": {"Home Depot": {"Anthropic": -0.513, "DeepSeek": -0.994, "OpenAI": -0.943}, "Lowe's": {"Anthropic": 0.346, "DeepSeek": -0.987, "OpenAI": -0.923}},
  "1.02.025": {"Home Depot": {"Anthropic": 0.860, "DeepSeek": -0.815, "OpenAI": -0.418}, "Lowe's": {"Anthropic": 0.872, "DeepSeek": 0.974, "OpenAI": 0.787}},
  "1.02.026": {"Home Depot": {"Anthropic": -0.926, "DeepSeek": -0.990, "OpenAI": -0.766}, "Lowe's": {"Anthropic": -0.397, "DeepSeek": -0.988, "OpenAI": -0.918}},
  "1.02.027": {"Home Depot": {"Anthropic": 0.957, "DeepSeek": -0.960, "OpenAI": -0.095}, "Lowe's": {"Anthropic": 0.969, "DeepSeek": -0.990, "OpenAI": 0.004}},
  "1.02.028": {"Home Depot": {"Anthropic": -0.887, "DeepSeek": -0.995, "OpenAI": -0.980}, "Lowe's": {"Anthropic": -0.320, "DeepSeek": -0.997, "OpenAI": -0.986}},
  "1.02.029": {"Home Depot": {"Anthropic": -0.887, "DeepSeek": -0.792, "OpenAI": -0.984}, "Lowe's": {"Anthropic": -0.886, "DeepSeek": -0.990, "OpenAI": -0.976}},
  "1.02.030": {"Home Depot": {"Anthropic": 0.975, "DeepSeek": 0.988, "OpenAI": 0.968}, "Lowe's": {"Anthropic": 0.970, "DeepSeek": 0.027, "OpenAI": 0.888}},
  "1.02.031": {"Home Depot": {"Anthropic": 0.927, "DeepSeek": -0.024, "OpenAI": 0.049}, "Lowe's": {"Anthropic": -0.003, "DeepSeek": -0.018, "OpenAI": -0.113}},
  "1.02.032": {"Home Depot": {"Anthropic": 0.752, "DeepSeek": 0.117, "OpenAI": -0.217}, "Lowe's": {"Anthropic": 0.155, "DeepSeek": -0.318, "OpenAI": 0.000}},
  "1.02.033": {"Home Depot": {"Anthropic": 0.975, "DeepSeek": 0.990, "OpenAI": 0.991}, "Lowe's": {"Anthropic": 0.927, "DeepSeek": 0.973, "OpenAI": 0.991}},
  "1.02.034": {"Home Depot": {"Anthropic": -0.949, "DeepSeek": -0.971, "OpenAI": -0.878}, "Lowe's": {"Anthropic": 0.274, "DeepSeek": -0.594, "OpenAI": -0.978}},
  "1.02.035": {"Home Depot": {"Anthropic": -0.386, "DeepSeek": -0.942, "OpenAI": -0.990}, "Lowe's": {"Anthropic": -0.903, "DeepSeek": -0.950, "OpenAI": -0.923}},
  "1.02.036": {"Home Depot": {"Anthropic": -0.936, "DeepSeek": -0.995, "OpenAI": -0.884}, "Lowe's": {"Anthropic": -0.983, "DeepSeek": -0.996, "OpenAI": -0.982}},
  "1.02.037": {"Home Depot": {"Anthropic": 0.765, "DeepSeek": -0.025, "OpenAI": -0.956}, "Lowe's": {"Anthropic": 0.837, "DeepSeek": -0.822, "OpenAI": 0.420}},
  "1.02.038": {"Home Depot": {"Anthropic": -0.883, "DeepSeek": -0.988, "OpenAI": -0.840}, "Lowe's": {"Anthropic": -0.105, "DeepSeek": -0.942, "OpenAI": -0.919}},
  "1.02.039": {"Home Depot": {"Anthropic": -0.946, "DeepSeek": -0.992, "OpenAI": -0.855}, "Lowe's": {"Anthropic": 0.834, "DeepSeek": -0.949, "OpenAI": -0.894}},
  "1.02.040": {"Home Depot": {"Anthropic": 0.926, "DeepSeek": -0.985, "OpenAI": 0.990}, "Lowe's": {"Anthropic": 0.970, "DeepSeek": -0.958, "OpenAI": 0.949}},
  "1.02.041": {"Home Depot": {"Anthropic": 0.062, "DeepSeek": 0.060, "OpenAI": 0.048}, "Lowe's": {"Anthropic": 0.491, "DeepSeek": -0.797, "OpenAI": 0.873}},
  "1.02.042": {"Home Depot": {"Anthropic": -0.947, "DeepSeek": -0.985, "OpenAI": -0.982}, "Lowe's": {"Anthropic": -0.907, "DeepSeek": -0.962, "OpenAI": -0.966}},
  "1.02.043": {"Home Depot": {"Anthropic": -0.957, "DeepSeek": -0.997, "OpenAI": -0.016}, "Lowe's": {"Anthropic": -0.968, "DeepSeek": -0.998, "OpenAI": -0.026}},
  "1.02.044": {"Home Depot": {"Anthropic": -0.974, "DeepSeek": -0.983, "OpenAI": -0.990}, "Lowe's": {"Anthropic": -0.963, "DeepSeek": -0.992, "OpenAI": -0.976}},
  "1.02.045": {"Home Depot": {"Anthropic": -0.337, "DeepSeek": -0.991, "OpenAI": -0.978}, "Lowe's": {"Anthropic": -0.939, "DeepSeek": -0.997, "OpenAI": -0.285}},
  "1.02.046": {"Home Depot": {"Anthropic": -0.502, "DeepSeek": -0.998, "OpenAI": -0.967}, "Lowe's": {"Anthropic": -0.954, "DeepSeek": -0.996, "OpenAI": -0.921}},
  "1.02.047": {"Home Depot": {"Anthropic": -0.782, "DeepSeek": -0.956, "OpenAI": 0.268}, "Lowe's": {"Anthropic": 0.022, "DeepSeek": -0.538, "OpenAI": 0.035}},
  "1.02.048": {"Home Depot": {"Anthropic": -0.071, "DeepSeek": -0.639, "OpenAI": 0.345}, "Lowe's": {"Anthropic": -0.222, "DeepSeek": -0.986, "OpenAI": 0.938}},
  "1.03.001": {"Home Depot": {"Anthropic": 0.615, "DeepSeek": 0.021, "OpenAI": 0.021}, "Lowe's": {"Anthropic": 0.911, "DeepSeek": 0.317, "OpenAI": 0.084}},
  "1.03.002": {"Home Depot": {"Anthropic": 0.024, "DeepSeek": 0.868, "OpenAI": 0.944}, "Lowe's": {"Anthropic": -0.760, "DeepSeek": 0.967, "OpenAI": -0.008}},
  "1.03.003": {"Home Depot": {"Anthropic": 0.779, "DeepSeek": -0.796, "OpenAI": 0.378}, "Lowe's": {"Anthropic": 0.800, "DeepSeek": -0.070, "OpenAI": 0.712}},
  "1.03.004": {"Home Depot": {"Anthropic": -0.097, "DeepSeek": 0.083, "OpenAI": 0.991}, "Lowe's": {"Anthropic": 0.920, "DeepSeek": 0.145, "OpenAI": 0.994}},
  "1.03.005": {"Home Depot": {"Anthropic": 0.716, "DeepSeek": 0.739, "OpenAI": -0.213}, "Lowe's": {"Anthropic": 0.039, "DeepSeek": -0.991, "OpenAI": -0.052}},
  "1.03.006": {"Home Depot": {"Anthropic": 0.982, "DeepSeek": 0.985, "OpenAI": 0.997}, "Lowe's": {"Anthropic": 0.982, "DeepSeek": 0.986, "OpenAI": 0.995}},
  "1.03.007": {"Home Depot": {"Anthropic": -0.740, "DeepSeek": -0.989, "OpenAI": -0.012}, "Lowe's": {"Anthropic": -0.522, "DeepSeek": -0.981, "OpenAI": -0.928}},
  "1.03.008": {"Home Depot": {"Anthropic": -0.089, "DeepSeek": -0.990, "OpenAI": -0.134}, "Lowe's": {"Anthropic": 0.583, "DeepSeek": -0.991, "OpenAI": -0.763}},
  "1.03.009": {"Home Depot": {"Anthropic": 0.936, "DeepSeek": -0.896, "OpenAI": -0.022}, "Lowe's": {"Anthropic": -0.027, "DeepSeek": -0.995, "OpenAI": 0.008}},
  "1.03.010": {"Home Depot": {"Anthropic": 0.718, "DeepSeek": -0.926, "OpenAI": -0.511}, "Lowe's": {"Anthropic": 0.485, "DeepSeek": -0.996, "OpenAI": -0.977}},
  "1.04.001": {"Home Depot": {"Anthropic": 0.576, "DeepSeek": -0.990, "OpenAI": -0.134}, "Lowe's": {"Anthropic": 0.812, "DeepSeek": -0.665, "OpenAI": 0.655}},
  "1.04.002": {"Home Depot": {"Anthropic": 0.198, "DeepSeek": -0.995, "OpenAI": -0.880}, "Lowe's": {"Anthropic": -0.842, "DeepSeek": -0.988, "OpenAI": -0.295}},
  "1.04.003": {"Home Depot": {"Anthropic": 0.513, "DeepSeek": -0.954, "OpenAI": 0.361}, "Lowe's": {"Anthropic": 0.791, "DeepSeek": -0.190, "OpenAI": 0.301}},
  "1.04.004": {"Home Depot": {"Anthropic": 0.021, "DeepSeek": -0.951, "OpenAI": -0.155}, "Lowe's": {"Anthropic": -0.512, "DeepSeek": -0.679, "OpenAI": 0.036}},
  "1.04.005": {"Home Depot": {"Anthropic": -0.964, "DeepSeek": -0.996, "OpenAI": -0.807}, "Lowe's": {"Anthropic": -0.929, "DeepSeek": -0.992, "OpenAI": 0.008}},
  "1.04.006": {"Home Depot": {"Anthropic": -0.978, "DeepSeek": -0.988, "OpenAI": -0.058}, "Lowe's": {"Anthropic": -0.987, "DeepSeek": -0.993, "OpenAI": 0.164}},
  "1.04.007": {"Home Depot": {"Anthropic": -0.692, "DeepSeek": -0.988, "OpenAI": -0.970}, "Lowe's": {"Anthropic": -0.949, "DeepSeek": -0.994, "OpenAI": -0.697}},
  "1.04.008": {"Home Depot": {"Anthropic": -0.115, "DeepSeek": -0.973, "OpenAI": 0.879}, "Lowe's": {"Anthropic": 0.573, "DeepSeek": -0.885, "OpenAI": -0.160}},
  "1.04.009": {"Home Depot": {"Anthropic": 0.880, "DeepSeek": -0.998, "OpenAI": -0.977}, "Lowe's": {"Anthropic": 0.904, "DeepSeek": -0.956, "OpenAI": -0.534}},
  "1.04.010": {"Home Depot": {"Anthropic": -0.949, "DeepSeek": -0.988, "OpenAI": 0.964}, "Lowe's": {"Anthropic": -0.923, "DeepSeek": -0.993, "OpenAI": 0.885}},
  "1.04.011": {"Home Depot": {"Anthropic": -0.613, "DeepSeek": -0.978, "OpenAI": -0.495}, "Lowe's": {"Anthropic": -0.922, "DeepSeek": -0.977, "OpenAI": 0.381}}
};'''

# Use regex to find and replace both sentimentByPIR blocks
# This pattern matches from "const sentimentByPIR" through the closing "};"
count = 0
while True:
    pattern = r'const sentimentByPIR = \{[^}]*(?:\{[^}]*\}[^}]*)*"1\.04\.011"[^}]*\};'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        break
    content = content[:match.start()] + new_sentiment_pir_data + ';' + content[match.end():]
    count += 1

print("Replaced %d sentimentByPIR data structure(s)" % count)

# Save the file
with open(md_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("File saved successfully")
