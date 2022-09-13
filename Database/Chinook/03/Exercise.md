# Chinook 03

## Intro

Exercises related to the slides and demos:

- Group by
- Stored procedures
- Views
- Indexes
- Triggers

## 3.1 (Group by)

List the amount of customers in each country

## 3.2 (Group by)

List the amount of invoices per year.

Hint: google for "Year(...)"

    select YEAR(InvoiceDate) Year, COUNT(*) NrOfInvoices
    from Invoice
    group by YEAR(InvoiceDate)

## 3.3 (Group by)

List all artists and how many albums they have released

So the query will return two columns:
- ArtistName
- NrOfAlbums: the amount of albums this artist has released

## 3.4 (Stored procedures)

Create a stored procedure **CreateTrack** with parameters
- name
- unit price
- media type id
- milliseconds
- playlist id

When the procedure is called it should add a new track and add it to an existing playlist

Hint: read about **SCOPE_IDENTITY()**

## 3.5 (Views)

Create a view **AlbumInfo** that contains two column: album title and artist name. Like this:

    Let There Be Rock	                    AC/DC
    For Those About To Rock We Salute You	AC/DC
    Balls to the Wall	                    Accept
    Restless and Wild	                    Accept

Then use the view to list info about albums that have 4 or fewer letters

## 3.6 (Index)

Measure the time it takes to add 10.000 employees (you can add the same employee over and over again)

Remove the inserted employees

Insert indexes on ALL columns (15 indexes)

Measure the time again and compare the result.

When you measure, try five times and pick the median value.

Extra: see if you get a different result if the inserted employees have random names, birthdate, country etc.

## 3.7 (Trigger)

Create a **table** that is similar to Artist. It should be namned **DeletedArtist** and have three columns:
- ArtistId
- Name
- DeletedDate

Then create a trigger **LogDeletedArtists**. When an artist is removed from the Artist-table, then a row should be added to DeletedArtist with ArtistId, Name and DeletedDate.

