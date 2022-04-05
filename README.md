# Wordscape Answers - Project Neo - Developer833

This is a continuation of the project I did last month that exposed how little I knew about arrays and objects. I was given a csv file with 6001 entries. All I needed to do was create a list that would link to an answer page. Each answer page would link to the next answer and/or previous one.

Simple enough, I thought I could do it in a day. One month later I'm still here learning.

I've learned alot about array's and objects by struggling to parse the csv into a data structure that I could use. I found packages like papaparse that I used to convert the csv into json, but I still needed to parse that into a structure I could use.

After completing the project the first time, it was reviewed by my mentor. This is my attempt to do it better with what I know now:

- pull data from static files, don't parse it at build time...
- don't settle for data that isn't useable, work it until you can write readable code
- take necessary time to visualize and mockout your data sample, make a smaller array or object for testing...THEN figure out how to parse the data to create that structure
