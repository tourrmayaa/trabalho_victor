import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CartaoDeVisita() {
  return (
    <View style={styles.container}>
      {/* CARTÃO CENTRALIZADO COM FLEXBOX */}
      <View style={styles.card}>
        
        {/* 01 - FOTO DE PERFIL (circular) */}
        <Image
          source={{ uri: "https://i.pravatar.cc/300?img=5" }}
          style={styles.foto}
        />

        {/* 02 - NOME E PROFISSÃO */}
        <Text style={styles.nome}>Ana Clara Mendes</Text>
        <Text style={styles.profissao}>Desenvolvedora React Native</Text>

        {/* 05 - SEPARADOR */}
        <View style={styles.divisor} />

        {/* 03 - INFORMAÇÕES DE CONTATO */}
        <View style={styles.contatoContainer}>
          <Text style={styles.contatoLabel}>Telefone</Text>
          <Text style={styles.contato}>(11) 98765-4321</Text>

          <Text style={styles.contatoLabel}>E-mail</Text>
          <Text style={styles.contato}>ana.clara@email.com</Text>

          <Text style={styles.contatoLabel}>Cidade</Text>
          <Text style={styles.contato}>São Paulo – SP</Text>
        </View>

        {/* 05 - SEPARADOR */}
        <View style={styles.divisor} />

        {/* 04 - SEÇÃO "SOBRE MIM" */}
        <Text style={styles.sobreTitulo}>Sobre mim</Text>
        <Text style={styles.sobreTexto}>
          Apaixonada por tecnologia e design de interfaces. 
          Especialista em React Native, busco criar aplicativos 
          intuitivos e com experiência de usuário excepcional.
        </Text>

      </View>
    </View>
  );
}