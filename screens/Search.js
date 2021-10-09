import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput
} from "react-native";

import { useFocusEffect } from '@react-navigation/native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import api from '../services/api';

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Localização2",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const affordable = 1
    const fairPrice = 2
    const expensive = 3

 
    const [categories, setCategories] = React.useState([])
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([])
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    const [restaurantData, setRestaurantData] = React.useState([])

    const [search, setSearch] = React.useState('');

    const [pesquisado, setPesquisado] = React.useState(false);

    


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    useFocusEffect(
        React.useCallback(() => {
            setRestaurants([]);
            setSearch('');
            setPesquisado(false);
        }, [])
    );

    const handleSearchButton = async () => {
        setPesquisado(true);
        const result = await api.searchProdutos(search);
        if(result.error === '') {
            setRestaurants(result.list);
            setRestaurantData(result.list);

        } else {
            alert(result.error);
        }
    }


    React.useEffect(()=>{
    },[]);

    const getProdutos = async () => {
        const result = await api.allProdutos();
        if(result.error === '') {
            setCategories(result.categorias);
            setRestaurants(result.list);
            setRestaurantData(result.list);

        } else {
            alert(result.error);
        }
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 40, marginBottom: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    
                    <View
                        style={{
                            width: '90%',
                            height: "100%",
                            backgroundColor: COLORS.white,
                            justifyContent: 'space-between',
                            borderRadius:10,
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            flexDirection: 'row',
                            paddingLeft:10,
                            paddingRight: 10
                            
                        }}
                    >
                   <TouchableOpacity
                         onPress={() => navigation.goBack()}
                        style={{
                            
                            justifyContent: 'center',
                            height: '100%',
                            
                        }}
                    >
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: COLORS.black
                            }}
                        />
                    </TouchableOpacity>
                        <TextInput 
                            style={{ ...FONTS.body3 }}
                            placeholder="Digite o código ou nome do produto"
                            placeholderTextColor="black"
                            value={search}
                            textAlign='center'
                            height='100%'
                            width='80%'
                            autoFocus={true}
                            
                            onChangeText={t=>setSearch(t)} 
                        />
                         <TouchableOpacity
                         onPress={handleSearchButton}
                        style={{
                            
                            justifyContent: 'center',
                            height: '100%',
                            
                        }}
                    >
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: COLORS.primary
                            }}
                        />
                    </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{uri: item.icon}}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                {/* <Text style={{ ...FONTS.h1 }}>Principais</Text>
                <Text style={{ ...FONTS.h1 }}>Categorias</Text> */}

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={{uri: item.photo}}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body3 }}>{item.codigo_produto} - {item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>Categoria :</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 5
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        {/* <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text> */}
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            // [1, 2, 3].map((priceRating) => (
                            //     <Text
                            //         key={priceRating}
                            //         style={{
                            //             ...FONTS.body3,
                            //             color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                            //         }}
                            //     >$</Text>
                            // ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {restaurants.length == 0 && pesquisado &&
            <View style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text >Nenhum produto foi encontrado</Text>
            </View>
            }
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home