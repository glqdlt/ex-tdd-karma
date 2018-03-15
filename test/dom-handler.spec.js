/**
 *
 *   Created By iw.jhun
 *   On 2018-03-15 , 오후 3:24
 *
 */

describe('dom 생성 관련', () => {
    let el;
    beforeEach(() => {
        el = $('<h1></h1>');
        $('body').append(el);
        $('body').append('<div id="test-div"></div>');
    })

    afterEach(() => el.remove());

    describe('jquery가 node에서 동작하는지를 보자.', () => {
        it('파라미터로 받은 돔에 인삿말을 출력한다.', () => {
            domHandler.print(el);

            domHandler.print("i'm not jquery");

        })
    })

    describe('dom 생성되었니?', () => {

        it('dom이 생성되었나?', () => {
            // length 는 1일 것이라고 기대한다.
            expect($('#test-div').length).toBe(0);
        })
    })

})