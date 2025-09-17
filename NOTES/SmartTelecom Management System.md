SmartTelecom Management System



geureka 8067

gateway 8080

auth service 9001

user service :9002

plan service 9003

recharge service:9004

usage-service 9005

billing-service 9006



------------------------------------------------------------------

1\. Eureka Server(geureka 8067)

· Service discovery for dynamic routing of microservices

http://localhost:8067

------------------------------------------------------------------

2\. API Gateway(gateway 8080)

· Routes requests to appropriate microservices

· JWT validation at gateway level

http://localhost:8080

-------------------------------------------------------------------

3\. Authentication Service(auth service 9001)

· User login \& registration

· Password encryption using BCryptPasswordEncoder

· JWT token generation

· Role-based access: Admin / Customer

http://localhost:8080

login() and register()



POST http://localhost:8080/auth/login

ADMIN:login

{

&nbsp;    "email": "ram@gmail.com",

&nbsp; "password": "1234"

}

--------------------------------------------

CUSTOMER

POST http://localhost:8080/auth/register



{

&nbsp; "name": "Sai",

&nbsp; "email": "sai@gmail.com",

&nbsp; "password": "1234",

&nbsp; "phone": "8877543210",

&nbsp; "role": "CUSTOMER"

}

----------------------------------------------

===============================================================

4.User Service(user service :9002)



· CRUD for customer profiles

· Update mobile plans

· Get plan usage summary

id is the PK



POST http://localhost:8080/users

{

&nbsp; "name": "Sai",

&nbsp; "email": "sai@gmail.com",

&nbsp; "mobile": "8877543210"

}

GET http://localhost:8080/users

GET http://localhost:8080/users/{id}

===============================================================

5.plan-service(plan service 9003)



POST: http://localhost:8080/plans


GET: http://localhost:8080/plans



GET: http://localhost:8080/plans/{id}



PUT: http://localhost:8080/plans/{id}

DELETE: http://localhost:8080/plans/{id}

private Long id;



&nbsp;	@Column(nullable = false, unique = true)

&nbsp;	private String planName;



&nbsp;	@Column(nullable = false)

&nbsp;	private double price;



&nbsp;	@Column(nullable = false)

&nbsp;	private int validityInDays;

=================================================================================
6.recharge-service:(recharge service:9004):

user-service 
user table
| id | email                                           | mobile     | name     |
| -- | ----------------------------------------------- | ---------- | -------- |
| 1  | [madan@gmail.com](mailto:madan@gmail.com)       | 9876543210 | Madan    |
| 2  | [chandu@gmail.com](mailto:chandu@gmail.com)     | 7776543210 | Chandu   |
| 3  | [chitti@gmail.com](mailto:chitti@gmail.com)     | 7776543210 | Chitti   |
| 4  | [maithili@gmail.com](mailto:maithili@gmail.com) | 7898654323 | Maithili |



plan-service
plan table
| id | data\_limit | description                                        | plan\_name          |
| -- | ----------- | -------------------------------------------------- | ------------------- |
| 1  | 2GB/day     | Best plan with daily 2GB data and unlimited calls  | Unlimited Data Plan |
| 2  | 1GB/day     | Affordable plan with 1GB per day and limited calls | Budget Data Plan    |
| 3  | 3GB/day     | Annual plan with max data and premium support      | Premium Annual Plan |

recharge-service
recharge table
id      cstomer_id plan_id recharge_date 
1	11	111	"02-06-2025"
2	22	222	"17-03-2025"
3	33	333	"13-05-2025"
4	44	444	"22-06-2025"

































