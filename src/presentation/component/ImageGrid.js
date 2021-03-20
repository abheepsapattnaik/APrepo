import React from 'react';
import Image1 from "../../asset/IMG_4022.jpg";
import Image2 from "../../asset/IMG_4125.jpg";
import Image3 from "../../asset/IMG_4017.jpg";
import Image5 from "../../asset/IMG_2711.jpg";
import {GridList, GridListTile, GridListTileBar, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 200,
    },
}));
const tileData = [
    {
        img: Image5,
        title: 'Image',
        author: 'Abheepsa',
        cols: 2,
    },
    {
        img: Image1,
        title: 'Image',
        author: 'Abheepsa',
        cols: 2,
    },{
        img: Image2,
        title: 'Image',
        author: 'Abheepsa',
        cols: 2,
    },{
        img: Image3,
        title: 'Image',
        author: 'Abheepsa',
        cols: 2,
    },

];
export const ImageGrid= () => {
    const classes = useStyles();
    return   <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title}/>
                     <GridListTileBar/>
            </GridListTile>
        ))}
    </GridList>;
}
