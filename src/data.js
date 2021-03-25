import avatar from "./asstes/avatar.jpg";
import theme_pic from "./asstes/drawers.jpg";
let d = new Date();
let month_name = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let today = {
  day: d.getDate(),
  month: d.getMonth(),
  year: d.getFullYear(),
  date: function () {
    return `${this.day} ${month_name[this.month]} ${this.year}`;
  },
};
const data = [
  {
    id: Math.round(Math.random(100000) * 1000),
    name: "Anna Judith",
    image: avatar,
    title_pic: theme_pic,
    date: today.date(),
    title:
      "Shift the overall look and feel by adding these wonderful touches to furniture in your home",
    article:
      "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete. ",
  },
];

export default data;
