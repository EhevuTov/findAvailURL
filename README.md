#Intro
This is a program that asynchronously requests websites to find whether they're available
or not up to a given alphanumeric length defined by the user (inside the program)

##Current Problems
- Node's dns.resolve4 uses C-Ares and is unable to currently change the timeout time
