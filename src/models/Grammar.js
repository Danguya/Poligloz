const mongoose = require('mongoose');

const GrammarSchema = mongoose.Schema({
    word:{
        type: String,
        required: true
    },
    translations:{
        Afar:{type: String},
        Abkhazian:{type: String},
        Achinese:{type: String},
        Acoli:{type: String},
        Adangme:{type: String},
        Adyghe:{type: String},
        Afro_Asiatic_languages:{type: String},
        Afrihili:{type: String},
        Afrikaans:{type: String},
        Ainu:{type: String},
        Akan:{type: String},
        Akkadian:{type: String},
        Aleut:{type: String},
        Algonquian_languages:{type: String},
        Southern_Altai:{type: String},
        Amharic:{type: String},
        English:{type: String},
        Angika:{type: String},
        Apache_languages:{type: String},
        Arabic:{type: String},
        Aramaic:{type: String},
        Aragonese:{type: String},
        Mapudungun:{type: String},
        Arapaho:{type: String},
        Artificial_languages:{type: String},
        Arawak:{type: String},
        Assamese:{type: String},
        Asturian:{type: String},
        Athapascan_languages:{type: String},
        Australian_languages:{type: String},
        Avaric:{type: String},
        Awadhi:{type: String},
        Aymara:{type: String},
        Avestan:{type: String},
        Azerbaijani:{type: String},
    },
    type: String,
    created_at:{
        type: Date,
        default: Date.now

    }
});

mongoose.model('Grammar', GrammarSchema);