const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server is up on the port ${port}`);
});