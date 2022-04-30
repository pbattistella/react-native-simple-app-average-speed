import React, { useState } from "react"
import {View, Text, TextInput, Button} from "react-native"
import styles from "../styles/velocidade"

export const VelocidadeMedia = (props) => {

    const [distancia, setDistancia] = useState()
    const [tempo, setTempo] = useState()
    const [velocidadeMedia, setVelocidadeMedia] = useState()

    const calcularVelocidadeMedia = () => {
        
        let velocidade = distancia / tempo
        setVelocidadeMedia(velocidade.toFixed(2))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.titulo}</Text>
            
            <TextInput 
                placeholder="Distância de deslocamento (km)"
                keyboardType="numeric"
                onChangeText={setDistancia}
                value={distancia}
                style={styles.input}
            />

            <TextInput 
                placeholder="Tempo de deslocamento (h)"
                keyboardType="numeric"
                value={tempo}
                onChangeText={setTempo}
                style={styles.input}
            />
            <TextInput 
                placeholder="Resultado: velocidade média (km/h)"
                keyboardType="numeric"
                value={velocidadeMedia}
                style={styles.input}
            />

            <Button 
                title="Calcular"
                color="#7e42f5"
                onPress={calcularVelocidadeMedia}
            />
        </View>
    )
}