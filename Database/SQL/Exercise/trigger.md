
# Triggers

*Purpose: show the use of "triggers" to do some action when something else occurs*

 A trigger is a stored procedure in database which automatically invokes whenever a special event in the database occurs. For example, a trigger can be invoked when a row is inserted into a specified table or when certain table columns are being updated.

Detail: Create trigger can't be used with SELECT(only INSERT, UPDATE, DELETE, CREATE, ALTER, DROP)

References:
- https://www.geeksforgeeks.org/sql-trigger-student-database/
- https://docs.microsoft.com/en-us/sql/t-sql/statements/create-trigger-transact-sql?view=sql-server-ver15
- https://www.sqlservertutorial.net/sql-server-triggers/sql-server-create-trigger/
- https://docs.microsoft.com/en-us/sql/t-sql/statements/create-trigger-transact-sql?view=sql-server-ver15

# Exercise

Create these tables:

	Employee
	- Name
	- Salary (number)
	- Role   (string)

	Log
	- Text (string)
	- Date (datetime)

# Exercise: 

Insert one row in the log tables with the text 'Some message' and the date 2020-01-01.

# Exercise: 

Try this command

	select GETDATE()

Add one more row in the Log-table, but use *GETDATE()* to get the current date

# Exercise

Create a trigger: 

after someone insert a value to the Employee-table => Add a row to the table "Log"

Test the trigger

The content of the tables should now be something like this

Content of Employees:

	Arne	10000	Software
	Berit	20000	Software

Content of Log:

	Some message       2021-01-01 00:00:00.000
	Some message       2021-03-10 14:18:51.103
	Employee inserted  2021-03-10 14:19:09.720
	Employee inserted  2021-03-10 14:19:09.730

## Exercise (extra)

SQL Server provides two virtual tables that are available specifically for triggers called INSERTED and DELETED tables. SQL Server uses these tables to capture the data of the modified row before and after the event occurs.

Create a trigger that will add the name of the inserted Employee

Expected (something like)

	Employee "Arne" inserted	2021-03-10 14:21:10.163
	Employee "Berit" inserted	2021-03-10 14:21:10.163