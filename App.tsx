import { BlurView, VibrancyView } from '@react-native-community/blur';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);
  const [winner, setWinner] = useState<string>('');

  const handleIncreaseScoreA = () => {
    if (scoreA < 10) setScoreA(scoreA + 1);
    checkWinner(scoreA + 1, scoreB, 'A');
  };

  const handleDecreaseScoreA = () => {
    if (scoreA > 0) setScoreA(scoreA - 1);
  };

  const handleIncreaseScoreB = () => {
    if (scoreB < 10) setScoreB(scoreB + 1);
    checkWinner(scoreA, scoreB + 1, 'B');
  };

  const handleDecreaseScoreB = () => {
    if (scoreB > 0) setScoreB(scoreB - 1);
  };

  const checkWinner = (scoreA: number, scoreB: number, team: string) => {
    if (scoreA >= 10) {
      setWinner('Tim A menang!');
    } else if (scoreB >= 10) {
      setWinner('Tim B menang!');
    } else {
      setWinner('');
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/e6/82/79/e68279e788bb8ede6f0f1d7dcc7f068c.jpg' }}  // Ganti dengan URL gambar latar belakang
      style={styles.container}
    >
      {/* Teks Judul */}
      <Text style={styles.title}>Pertandingan Futsal</Text>

      <View style={styles.teamContainer}>
        {/* Tim A */}
        <View style={[styles.team, styles.teamLeft]}>
          <Text style={styles.teamName}>Tim A</Text>
          <View style={styles.scoreContainer}>
            <Button title="+" onPress={handleIncreaseScoreA} />
            <Text style={styles.score}>{scoreA}</Text>
            <Button title="-" onPress={handleDecreaseScoreA} />
          </View>
        </View>
        
        {/* Kotak Pemisah */}
        <View style={styles.separator}></View>

        {/* Tim B */}
        <View style={[styles.team, styles.teamRight]}>
          <Text style={styles.teamName}>Tim B</Text>
          <View style={styles.scoreContainer}>
            <Button title="+" onPress={handleIncreaseScoreB} />
            <Text style={styles.score}>{scoreB}</Text>
            <Button title="-" onPress={handleDecreaseScoreB} />
          </View>
        </View>
      </View>

      {/* Menampilkan Pemenang */}
      {winner ? <Text style={styles.winner}>{winner}</Text> : null}

      {/* Tombol Reset Pertandingan */}
      <View style={styles.resetContainer}>
        <Button title="Reset Pertandingan" onPress={handleReset} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Menjaga konten tetap berada di atas
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,  // Menambahkan jarak di atas judul
    marginBottom: 10,
    textAlign: 'center',
    color: 'white', // Pastikan teks bisa terbaca dengan warna latar belakang
  },

  teamContainer: {
    flexDirection: 'row',  // Menyusun Tim A dan Tim B secara horizontal
    justifyContent: 'center',  // Menyusun tim secara horizontal dengan pemisah di tengah
    width: '100%',
    marginBottom: 50,
  },

  team: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 240,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Transparan untuk memberi efek blur
  },

  teamLeft: {
    marginRight: 10,  // Menambahkan jarak antar tim
  },

  teamRight: {
    marginLeft: 10,  // Menambahkan jarak antar tim
  },

  teamName: {
    fontSize: 20,
    marginBottom: 33,
    color: 'white',
  },

  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  score: {
    fontSize: 30,
    marginHorizontal: 10,
    color: 'white',
  },

  winner: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'yellow',
    marginVertical: 20,
    textAlign: 'center',
  },

  resetContainer: {
    width: '100%',
    alignItems: 'center',  // Menyusun tombol reset di tengah bawah
    marginBottom: 10,
  },

  // Kotak Pemisah antara Tim A dan Tim B
  separator: {
    width: 1,
    marginHorizontal: 10,
  },
});

export default App;
