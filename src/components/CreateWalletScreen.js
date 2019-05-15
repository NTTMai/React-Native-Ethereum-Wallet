import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Segment, Text, Icon, Button, Header, Left, Body, Title, Right, Form, Textarea, Input, Item } from 'native-base';

import bip39 from 'react-native-bip39';
import bip32 from 'bip32';
// import ethUtil from 'ethereumjs-util';


export default class CreateWalletScreen extends Component {
    static navigationOptions = {
        title: 'Create Wallet'
    }

    constructor(props) {
        super(props);
        
        this.state = {
            mnemonic: null
        }
    }

    componentWillMount = () => {
        // Mnemonic generation
        bip39.generateMnemonic().then(mnemonic => {
            this.setState({ mnemonic })
        });
    }

    // _createWallet = async () => {
    //     const seed = bip39.mnemonicToSeed(this.state.mnemonic);
    //     // Master Key Generation (HDPrivateKey)
    //     const root = bip32.fromSeed(seed);
    //     // Ethereum private key generation
    //     const xPrivKey = root.derivePath("m/44'/60'/0'/0/0");
    //     const privKey = xPrivKey.privateKey.toString('hex');
    //     // Ethereum address generation
    //     let address = ethUtil.pubToAddress(xPrivKey.publicKey, true).toString('hex');
    //     // Convert to Ethereum EIP-55 checksum address
    //     address = ethUtil.toChecksumAddress(address).toString('hex');
    //     alert(address);
    // }

    render() {
        return (
            <Container style={styles.container}>
                <View style={{ flex: 1, padding: 10 }}> 
                    <View style={{ flex: 1 }}>
                        <Text note>Please copy and backup the 12 mnemonics below. This is very important data to recover your wallet.</Text>
                        <Form>
                            <Textarea rowSpan={5} bordered disabled value={this.state.mnemonic}/>
                        </Form>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button block primary onPress={() => {
                            // this._createWallet()
                        }}>
                            <Text>Create</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});