import { TrieNode } from "./TrieNode";

export class Trie {    

    private root: TrieNode = new TrieNode();    

    constructor() { 
        this.root = new TrieNode();        
    };    

    public insert(word: string) {                                        
        var children = this.root.children;        
        let level = 0;

        for(const char of word) {            
            let node;
            if(children.get(char)) {
                node = children.get(char);
            } else {
                node = new TrieNode(char);
                children.set(char, node);
            }

            children = node.children;

            if(level++ === word.length - 1) {
                node.isLeaf = true;                
            }
        }                      
    }

    public search(value: string): boolean {        
        let word = value.replace(" ", "").toLowerCase();        
        const node = this.getNode(word);

       if(node && node.isLeaf) {
           return true;
       } else {
           return false;
       }
    }

    getNode(value: string): TrieNode {
        let node = null;        
        var currentNode = this.root.children;

        for(let ch of value) {                        
            if(currentNode.get(ch)) {
                node = currentNode.get(ch);                 
                currentNode = node.children;                   
            } else {                
                return null;
            }
        }

        return node;
    }
}