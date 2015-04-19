# stc
Simple Transaction Connector
-----
The purpose of this node.js/angular.js/mongoDB app is to act as a connector between ShipStation & WINIT 3PL. 

Backend
node.js, node-schedule, mongodb

Frontend
angular.js

Tasks
1. Get Orders 'awaiting_shipment' from ShipStation
	a. If new order, add to DB
	b. (optional) auto submit to WINIT outbound queue

2. Check submitted Orders status from WINIT
	a. retreive shipment/tracking data from WINIT, update DB

3. Upload Tracking / Mark Shipped in ShipStation 


