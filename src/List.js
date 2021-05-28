import React from 'react';
import {Box, Grid} from '@material-ui/core'

const divStyleRed = {
    backgroundColor: "red", 
    borderRadius: "15px",
    color: "black",
    width: "100px",
    heigth: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
};

const divStyleYellow = {
    backgroundColor: "yellow", 
    borderRadius: "15px",
    color: "black",
    width: "100px",
    heigth: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
};

const divStyleGreen = {
    backgroundColor: "green", 
    borderRadius: "15px",
    color: "black",
    width: "100px",
    heigth: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
};

const divStyleWhite = {
    backgroundColor: "grey", 
    borderRadius: "15px",
    color: "black",
    width: "100px",
    heigth: "100px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
};

const listStyleItems = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    gridTemplateRows: "100px",
    width: "100vw",
    height: "100vh",
    gridGap: "1rem",
    gridAutoFlow: "dense"
};

const List = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>{
        if(number%3 == 0 && number%5 ==0){
            return (
                <Grid item>
                    <div style={divStyleGreen}>
                        <p>{number}</p> 
                        <p>FizzBuzz</p>
                    </div>
                </Grid>
                )
        }
        if(number%3 == 0){
            return (
                <Grid item>
                    <div style={divStyleRed}>
                    <p>{number}</p> 
                    <p>Fizz</p>
                    </div>
                </Grid>)
                
        }
        if(number%5 == 0){
            return (
                <Grid item>
                    <div style={divStyleYellow}>
                    <p>{number}</p> 
                    <p>Buzz</p>
                    </div>
                </Grid>)
        } 
        else{
            return (
                <Grid item>
                    <div style={divStyleWhite}>
                        <p>{number}</p> 
                    </div>
                </Grid>
                )
        }
        
    }
    );

    return (
        <Grid container>
            <div style={listStyleItems}>
                {listItems}
            </div>   
        </Grid>
        
    );
}

export default List;