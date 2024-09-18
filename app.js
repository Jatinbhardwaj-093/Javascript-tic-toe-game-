const app = Vue.createApp({
    data() {
        return {
            player: 'X',
            boxes: ['', '', '', '', '', '', '', '', ''],
            winner: null,
            positions: null

        }
    },

    methods: {
        removingWinnerBlock() {
            for (let i = 0; i < 9; i++) {
                let p = "box" + String(i);
                this.$refs[p].classList.remove("winnerblock");
            }
        },
        reset() {
            this.boxes = ['', '', '', '', '', '', '', '', '']
            this.player = 'X'
            this.winner = null
            this.positions = null
            this.removingWinnerBlock()
        } ,
        checkWinner() {
            if (this.boxes[0] === this.boxes[1] && this.boxes[1] === this.boxes[2] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                this.positions=[0,1,2]
            } else if (this.boxes[3] === this.boxes[4] && this.boxes[4] === this.boxes[5] && this.boxes[3] !== '') {
                this.winner = this.boxes[3]
                this.positions=[3,4,5]
            } else if (this.boxes[6] === this.boxes[7] && this.boxes[7] === this.boxes[8] && this.boxes[6] !== '') {
                this.winner = this.boxes[6] 
                this.positions=[6,7,8]
            } else if (this.boxes[0] === this.boxes[3] && this.boxes[3] === this.boxes[6] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                this.positions=[0,3,6]
            } else if (this.boxes[1] === this.boxes[4] && this.boxes[4] === this.boxes[7] && this.boxes[1] !== '') {
                this.winner = this.boxes[1]
                this.positions=[1,4,7]
            } else if (this.boxes[2] === this.boxes[5] && this.boxes[5] === this.boxes[8] && this.boxes[2] !== '') {
                this.winner = this.boxes[2]
                this.positions=[2,5,8]
            } else if (this.boxes[0] === this.boxes[4] && this.boxes[4] === this.boxes[8] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                this.positions=[0,4,8]
            } else if (this.boxes[2] === this.boxes[4] && this.boxes[4] === this.boxes[6] && this.boxes[2] !== '') {
                this.winner = this.boxes[2] 
                this.positions=[2,4,6]
            }
        },
        
        draw() {
            if (this.boxes.indexOf('') === -1 && this.winner == null) {
                this.winner='Draw'
            }
        },

        winnerblock() {
            if (this.positions != null) {
                for (let i = 0; i < this.positions.length; i++) {
                    let p = "box" + String(this.positions[i]);
                    this.$refs[p].classList.add("winnerblock");
                }
            }
        },
        
        clickBox(box) { 
            if (this.boxes[box] === '') {
                this.boxes[box] = this.player
                if (this.player === 'X') {
                    this.player =  'O'
                } else {this.player = 'X'}
            }  
            this.checkWinner() 
            this.draw()
            this.disabled()
            this.winnerblock()
            
        },


        disabled() {
            if (this.winner != null) {
                return true
            }
            else {
                return false
            }
            
        }
    

    }
});


