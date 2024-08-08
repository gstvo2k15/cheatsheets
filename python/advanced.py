# Advanced Python Concepts
import asyncio

async def fetch_data():
    await asyncio.sleep(2)
    return 'Data fetched'

async def main():
    data = await fetch_data()
    print(data)

asyncio.run(main())
