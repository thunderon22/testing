import pandas as pd
series_data = pd.Series([1,2,3,4,5,6],index=['a','b','c','d','e','f'])
series_data['g'] = 7
series_data['a'] = 100

print(series_data)