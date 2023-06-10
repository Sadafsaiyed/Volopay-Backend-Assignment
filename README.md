# Volopay-Backend-Assignment

API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that should be used for requesting and exchanging information between systems, enabling them to work together seamlessly.
APIs act as intermediaries, facilitating the exchange of data and functionality between different software components, such as web applications, operating systems, or databases. They provide a standardized way for developers to access the features and resources of a particular software system or service without needing to understand the complex details of its internal workings.
APIs can be used to retrieve data from a remote server, send data to a server, perform specific actions or operations, or integrate various services and platforms. They can expose different types of functionality, including retrieving and manipulating data, authentication and authorization, sending notifications, or controlling hardware devices.
In summary, an API is a tool that allows software applications to communicate and interact with each other, enabling developers to leverage existing functionality and services in their own applications without reinventing the wheel.


* In the given assignment, I am developing the APIs using the attached dataset of purchases of different softwares throughout the year.
* The programming language and framework that best suites the assignment requirements are javascript and Nextjs, so I have worked on the same.
* For accessing the data for my APIs, I have converted the csv file of the given data set into the Json file.

## API 1: 

- API Endpoint: /api/total_items
The URL path used to access the API is known as the endpoint. The endpoint in this instance is "/api/total_items". It stands for the particular feature or resource you want to use.

- Use Case: 
The total number of seats (items) sold in marketing during the third quarter (Q3) of the year.
You need to retrieve the total number of seats sold in the Marketing division during the third quarter (Q3) of the year, and this use case explains your exact demand in detail.

- Expected Output:
An integer reflecting the total number of seats sold should be returned by the API.
The outcome you anticipate getting from the API is known as the expected output. In this instance, it ought to be an integer value that represents the overall number of seats that were sold both during the designated time frame and within the Marketing division.

- Parameters: 
The inputs or arguments you give the API in order to customise your request and obtain the necessary data are known as parameters. There are three parameters in this use case:
start_date: A DATE parameter that specifies the beginning of the time period for which you're requesting data. In order to indicate the beginning of the third quarter, you would use a specific date in the format YYYY-MM-DD, such as "2023-07-01".
end_date: A DATE parameter that specifies the final day of the time frame for which you're requesting data. 
In a similar manner, you would enter a specific date in the form YYYY-MM-DD, such as "2023-09-30", to indicate the conclusion of the third quarter.
department: the department from which the data should be retrieved, specified as a string parameter. To explicitly retrieve data from the Marketing division in this situation, it should be set to "Marketing".

- API Request:
You would create an HTTP request to the API endpoint with the required parameters to use this API.

- API Response:
 The API would take your request, process it, and then get the pertinent information from the database or underlying system. The total number of seats sold during the designated time period and department would be calculated. The result in the format you specified—in this case, an integer designating the total number of sold seats—would be included in the API response. 
 
 ## API 2:

 - Endpoint: /api/nth_most_total_item
 -API Use Cases:
 * What is the 2nd most sold item in terms of quantity sold in Q4?
 * What is the fourth most sold item in terms of total price in Q2?
 
 - Expected Output: 
 The API should return a string representing the name of the item.

 - Parameters:
  item_by: A parameter indicating whether the ranking should be based on "quantity" or "price". It determines whether the API should consider the quantity sold or   the total price of the items.
  start_date: A DATE parameter specifying the start date of the period for which you want to retrieve the data.
  end_date: A DATE parameter specifying the end date of the period for which you want to retrieve the data.
  n: An integer parameter indicating the nth rank you are interested in. For example, if n=2, you want the 2nd most sold item.
  
  Let's explain the API in detail:

The API endpoint "/api/nth_most_total_item" represents the functionality to retrieve the nth most sold item based on either the quantity sold or the total price within a specific period.

For the first use case, the API will find the 2nd most sold item in terms of quantity sold during Q4 (fourth quarter) of the year. This allows you to identify the item that had the second-highest quantity sold.

For the second use case, the API will find the fourth most sold item in terms of the total price during Q2 (second quarter) of the year. This allows you to identify the item with the fourth-highest total price.

To use the API, you need to provide the following parameters:

item_by: This parameter accepts either "quantity" or "price" as its value. If you set it to "quantity", the API will rank the items based on the quantity sold. If you set it to "price", the API will rank the items based on the total price.
start_date: This parameter specifies the start date of the period you want to analyze. You need to provide a specific date in the format YYYY-MM-DD.
end_date: This parameter specifies the end date of the period you want to analyze. Similarly, you need to provide a specific date in the format YYYY-MM-DD.
n: This parameter indicates the rank you are interested in. For example, if you set n=2, the API will retrieve the item that ranks second in terms of quantity sold or total price.
To make a request to the API, you would construct an HTTP request to the endpoint along with the required parameters. 
This request is asking for the 2nd most sold item in terms of quantity sold during Q4 of the year 2023, from October 1st to December 31st.

The API would process the request, retrieve the relevant data from the database or system, calculate the ranking based on the specified criteria (quantity or price), and return the name of the item as a string in the response.
Similarly, you can use the API for the second use case by setting the "item_by" parameter to "price" and adjusting the dates and rank accordingly.

By utilizing this API, you can programmatically retrieve the nth most sold item based on quantity sold or total price, allowing you to analyze sales data and gain insights into popular products during specific periods.



