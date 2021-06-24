import React from 'react'
import {useForm, Controller} from "react-hook-form"

const config = require('../config.json')

const TOKEN = config.token
const CHAT_ID = config.chatId

$("#input__approval").click(function () {
    $(this).toggleClass('checkbox-inp__checked')
})

function Form() {
    const {register, handleSubmit, control, reset} = useForm()

    const onSubmit = (data) => {
        let text = `<b>Имя</b>: ${data.name}%0A<b>Номер</b>: ${data.phone}`

        fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${text}`)
            .then(res => {
                if (res.status !== 200) {
                    console.log("Телеграм-бот выключен!")
                }
            })

        reset()
    }

    return (
        <form method="post" action="" id="formList" onSubmit={handleSubmit(onSubmit)}>
            <label
                htmlFor="input__name"
                className="label__field"
            >Имя</label>

            <input
                id="input__name"
                name="name"
                placeholder="Укажите Ваше имя"
                {...register("name", {
                    required: true
                })}
            />

            <label
                htmlFor="input__phone"
                className="label__field"
            >Телефон</label>

            <input
                id="input__phone"
                name="phone"
                placeholder="Укажите телефон для связи"
                {...register("phone", {
                    pattern: /^((8|\+7)[`\- ]?)?(\(?\d{3}\)?[`\- ]?)?[\d\- ]{7,10}$/,
                    required: true
                })}
            />

            <div className="checkbox">
                <Controller
                    name="approval"
                    control={control}
                    defaultValue={false}
                    rules={{required: true}}
                    render={({field}) => <input type="checkbox" id="input__approval" {...field} />}
                />

                <label
                    htmlFor="input__approval"
                    id="label__checkbox"
                >Согласие на обработку данных</label>
            </div>

            <input type="submit" name="smb" className="btn-submit"/>
        </form>
    )
}

export default Form