need to create partials folder in hadlebars
then add burger
call file delete

    <
    form action = "/{{this.id}}?_method=deleteOne"
method = "POST" >
    <!-- option 2, pass in the id of the burger inside the form - you would access this in the route using req.body.id not req.params.id -->
    <!-- <input type="hidden" burger_name="id" value="{{this.id}}"> -->
    <
    button type = "submit" > Devoured! < /button> < /
    form >