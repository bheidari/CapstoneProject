const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    card_title: { type: String, required: true },
    imageURL: { type: String, default: "/img/teacher-f1.png" },
    background: { type: String, required: true },
    email: { type: String },
    phone: { type: String }
})

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;