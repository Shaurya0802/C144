import React from "react"
import { Text, Button, StyleSheet, TouchableOpacity, View, Image, FlatList } from "react-native"
import { Header, AirbnbRating, Icon, Card } from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize"
import axios from "axios"

export default class RecommendedMoviesScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    getData = () => {
        const url = "http://127.0.0.1:5000/recommended-movies";

        axios
        .get(url)
        .then(response => {
            let details = response.data.data;
            this.setState({
                data: details
            }).catch(err => {console.log(err.message)})
        })
    }

    timeConvert(num) {
        var hours = Math.floor(num/60)
        var minutes = num % 60
        return `${hours} hrs ${minutes} mins`
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item, index}) => {
        return (
            <Card 
                key = {`card-${index}`}
                image = {{uri: item.poster_link}}
                imageProps = {{resizeMode: "cover"}}
                featuredTitle = {item.title}
                containerStyle = {styles.cardContainer}
                featuredTitleStyle = {styles.title}
                featuredSubtitle = {`${item.release_date.split("-")[0]} | ${this.timeConvert(item.duration)}`}
                featuredSubtitleStyle = {styles.subtitle}
            />
        )
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {data} = this.state

        return (
            <View style={styles.container}>
                <FlatList data={data} keyExtractor={this.keyExtractor} renderItem={this.renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    title: {
      color: "#fff",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(25),
      marginTop: RFValue(65)
    },
    subtitle: {
      fontWeight: "bold",
      alignSelf: "flex-start",
      paddingLeft: RFValue(15),
      fontSize: RFValue(15)
    },
    cardContainer: {
      flex: 1,
      borderRadius: RFValue(10),
      justifyContent: "center",
      height: RFValue(110),
      marginBottom: RFValue(20)
    }
  });
   
  
  