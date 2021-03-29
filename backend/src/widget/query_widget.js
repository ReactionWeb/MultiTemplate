const {Paragraph} = require('../models');



const getWidgetContent = async(widget_id) => {
    return await Paragraph.findOne({where: {id:widget_id}, attributes:["title","content"]});
}

module.exports = {
    getWidgetContent,
}