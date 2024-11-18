import pandas as pd
from sqlalchemy import create_engine

# Replace with your CSV file path
csv_file = "./spotify_songs_dataset.csv"

# MySQL connection string (root user, no password)
db_connection = "mysql+pymysql://root@localhost/portfolio"

# Table name to save data
table_name = "spotify_songs"

# Read the CSV file
df = pd.read_csv(csv_file)

# Create a database connection
engine = create_engine(db_connection)

# Save DataFrame to SQL
df.to_sql(table_name, con=engine, if_exists='replace', index=False)

print(f"Data from {csv_file} has been saved to {table_name} table in the database.")
