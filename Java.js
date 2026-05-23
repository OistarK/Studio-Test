const BoneList = document.querySelectorAll('#colIndex .one');

BoneList.forEach(Bone => {
    var Unfound = true
    Bone.addEventListener('click', () => {


        if (Unfound == true) {
        Unfound = false
        Bone.classList.replace('one', 'onefound');
        }
        else if (Unfound == false) {
        Unfound = true
        Bone.classList.replace('onefound', 'one');
        }


    })
});
