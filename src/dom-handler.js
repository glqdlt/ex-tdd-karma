/**
 *
 *   Created By iw.jhun
 *   On 2018-03-15 , 오후 3:23
 *
 */

const domHandler = {
    print : function(el){
        if(!(el instanceof jQuery)){
            throw new Error('파라미터는 제이쿼리 이여야 합니다.');
        }
        console.log(el);
    }
}