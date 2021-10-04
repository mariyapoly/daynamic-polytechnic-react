import { useEffect, useState } from "react"

const useTeachers = () => {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    return [teachers]
}

export default useTeachers;