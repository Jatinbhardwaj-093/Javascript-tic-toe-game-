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
        reset() {
            this.boxes = ['', '', '', '', '', '', '', '', '']
            this.player = 'X'
            this.winner = null
            this.positions = null
        } ,
        checkWinner() {
            if (this.boxes[0] === this.boxes[1] && this.boxes[1] === this.boxes[2] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                return this.positions=[0,1,2]
            } else if (this.boxes[3] === this.boxes[4] && this.boxes[4] === this.boxes[5] && this.boxes[3] !== '') {
                this.winner = this.boxes[3]
                return this.positions=[3,4,5]
            } else if (this.boxes[6] === this.boxes[7] && this.boxes[7] === this.boxes[8] && this.boxes[6] !== '') {
                this.winner = this.boxes[6] 
                return this.positions=[6,7,8]
            } else if (this.boxes[0] === this.boxes[3] && this.boxes[3] === this.boxes[6] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                return this.positions=[0,3,6]
            } else if (this.boxes[1] === this.boxes[4] && this.boxes[4] === this.boxes[7] && this.boxes[1] !== '') {
                this.winner = this.boxes[1]
                return this.positions=[1,4,7]
            } else if (this.boxes[2] === this.boxes[5] && this.boxes[5] === this.boxes[8] && this.boxes[2] !== '') {
                this.winner = this.boxes[2]
                return this.positions=[2,5,8]
            } else if (this.boxes[0] === this.boxes[4] && this.boxes[4] === this.boxes[8] && this.boxes[0] !== '') {
                this.winner = this.boxes[0]
                return this.positions=[0,4,8]
            } else if (this.boxes[2] === this.boxes[4] && this.boxes[4] === this.boxes[6] && this.boxes[2] !== '') {
                this.winner = this.boxes[2] 
                return this.positions=[2,4,6]
            }
        },
        
        draw() {
            if (this.boxes.indexOf('') === -1 && this.winner == null) {
                this.winner='Draw'
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


