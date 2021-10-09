import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import api from '../services/api';

const Home = ({ navigation }) => {

    // Dummy Datas

    const initialCurrentLocation = {
        streetName: "Localização",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    

    // const categoryData = [
    //     {
    //         id: 1,
    //         name: "PLÁSTICOS",
    //         icon: icons.pasticos,
    //     },
    //     {
    //         id: 2,
    //         name: "REAGENTES PARA BIOLOGIA MOLECULAR",
    //         icon: icons.reagentes,
    //     },
    //     {
    //         id: 3,
    //         name: "MANUSEIO DE LÍQUIDOS",
    //         icon: icons.manuseio,
    //     },
    //     {
    //         id: 4,
    //         name: "CULTURA DE CÉLULAS EM 3D",
    //         icon: icons.cultura_da_celulas,
    //     },
    //     {
    //         id: 5,
    //         name: "ELETROFORESE",
    //         icon: icons.eletroforense,
    //     },
    //     {
    //         id: 6,
    //         name: "ANÁLISE ELEMENTAR",
    //         icon: icons.analise_elementar,
    //     },
    //     {
    //         id: 7,
    //         name: "EQUIPAMENTOS",
    //         icon: icons.equipamentos,
    //     },
    //     {
    //         id: 8,
    //         name: "EXTRAÇÃO DE ÁCIDOS NUCLÉICOS",
    //         icon: icons.extracao_acidos,
    //     },
    //     {
    //         id: 9,
    //         name: "LADDERS",
    //         icon: icons.ladders,
    //     },
    //     {
    //         id: 10,
    //         name: "MEIOS DE CULTURA",
    //         icon: icons.meios_de_cultura,
    //     },

    // ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    // const restaurantData = [
    //     {
    //         id: 1,
    //         name: "PLÁSTICOS",
    //         rating: 4.8,
    //         categories: [1],
    //         priceRating: affordable,
    //         photo: images.garrafas_de_cultura3,
    //         duration: "Promoção",
    //         location: {
    //             latitude: 1.5347282806345879,
    //             longitude: 110.35632207358996,
    //         },
    //         courier: {
    //             avatar: images.avatar_1,
    //             name: "Amy"
    //         },
    //         menu: [
    //             {
    //                 menuId: 1,
    //                 name: "GARRAFAS PARA CULTURA CELULAR 25CM²",
    //                 photo: images.garrafas_de_cultura3,
    //                 description: "As garrafas para cultura de células da SPL são projetadas de forma ergonômica, de modo a facilitar o manuseio pelo usuário, bem como para reduzir o risco de contaminação nas culturas de células.",
    //                 calories: 200,
    //                 price: 10
    //             }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         name: "REAGENTES PARA BIOLOGIA MOLECULAR",
    //         rating: 4.8,
    //         categories: [2, 4, 6],
    //         priceRating: expensive,
    //         photo: images.reagentes1,
    //         duration: "Promoção",
    //         location: {
    //             latitude: 1.556306570595712,
    //             longitude: 110.35504616746915,
    //         },
    //         courier: {
    //             avatar: images.avatar_2,
    //             name: "Jackson"
    //         },
    //         menu: [
    //             {
    //                 menuId: 4,
    //                 name: "DRYTECH TEMPASE 5X MASTER",
    //                 photo: images.reagentes1,
    //                 description: "DRYTECH TEMPASE 5X MASTER",
    //                 calories: 250,
    //                 price: 15
    //             }
    //         ]
    //     },
    //     {
    //         id: 3,
    //         name: "MANUSEIO DE LÍQUIDOS",
    //         rating: 4.8,
    //         categories: [3],
    //         priceRating: expensive,
    //         photo: images.manuseio_de_liquidos,
    //         duration: "Promoção",
    //         location: {
    //             latitude: 1.5238753474714375,
    //             longitude: 110.34261833833622,
    //         },
    //         courier: {
    //             avatar: images.avatar_3,
    //             name: "James"
    //         },
    //         menu: [
    //             {
    //                 menuId: 8,
    //                 name: "MIDI PLUS™ CONTROLADOR DE PIPETAGEM",
    //                 photo: images.manuseio_de_liquidos,
    //                 description: "Fresh tomatoes, all beef",
    //                 calories: 100,
    //                 price: 20
    //             }
    //         ]
    //     },
    //     {
    //         id: 4,
    //         name: "ELETROFORESE",
    //         rating: 4.8,
    //         categories: [8],
    //         priceRating: expensive,
    //         photo: images.eletroforese,
    //         duration: "Promoção",
    //         location: {
    //             latitude: 1.5578068150528928,
    //             longitude: 110.35482523764315,
    //         },
    //         courier: {
    //             avatar: images.avatar_4,
    //             name: "Ahmad"
    //         },
    //         menu: [
    //             {
    //                 menuId: 9,
    //                 name: "CUBA PARA ELETROFORESE HORIZONTAL MULTISUB MIDI 10X7 CM",
    //                 photo: images.eletroforese,
    //                 description: "A MultiSUB Midi foi desenvolvida para permitir mais amostras que a unidade MultiSUB Mini",
    //                 calories: 100,
    //                 price: 50
    //             }
    //         ]
    //     },
    //     {
    //         id: 5,
    //         name: "EQUIPAMENTOS",
    //         rating: 4.8,
    //         categories: [5],
    //         priceRating: affordable,
    //         photo: images.lavadora,
    //         duration: "Promoção",
    //         location: {
    //             latitude: 1.558050496260768,
    //             longitude: 110.34743759630511,
    //         },
    //         courier: {
    //             avatar: images.avatar_4,
    //             name: "Muthu"
    //         },
    //         menu: [
    //             {
    //                 menuId: 10,
    //                 name: "LAVADORA DE MICROPLACAS",
    //                 photo: images.lavadora,
    //                 description: "Noodles with char siu",
    //                 calories: 200,
    //                 price: 5
    //             }
    //         ]
    //     }

    // ]

    const [categories, setCategories] = React.useState([])
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState([])
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    const [restaurantData, setRestaurantData] = React.useState([])

    


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


    React.useEffect(()=>{
        getProdutos();
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

    const handleSearchButton = () => {
        navigation.navigate('Search');
    }

    function renderHeader() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', height: 50, marginTop: 40 }} onPress={handleSearchButton}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '90%',
                            height: "100%",
                            backgroundColor: COLORS.white,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            borderRadius:10,
                            borderColor: COLORS.secondary,
                            borderWidth:1,
                            flexDirection: 'row',
                            
                        }}
                    >
                   
                        <Text 
                            style={{ ...FONTS.body3, justifyContent: 'center', alignItems: 'center' }}
                            
                            
                        >Digite o código ou nome do produto</Text>
                         <View
                         
                        style={{
                            
                            justifyContent: 'center',
                            height: '100%',
                            paddingLeft:20,
                            paddingRight:20
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
                    </View>
                    </View>
                </View>

                
            </TouchableOpacity>
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
            {renderMainCategories()}
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