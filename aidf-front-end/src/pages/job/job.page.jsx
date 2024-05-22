
import { Briefcase, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useState } from "react";




 

function JobPage() {
    const job = {
        title : "intern - Softwre Engineer",
        description:
            "Do you dream of working alongside industry experts and transforming your classroom knowledge into practical software engineering skills? We're seeking a talented and motivated Software Engineer Intern to join our team. This is an exciting opportunity to learn from experienced engineers in a collaborative environment, contribute to the development of innovative software products, and gain valuable real-world experience to launch your software engineering career. ",
        type : "full-time",
        location : "Remote",
        Questions : [
            "Share your acadmic background and highlight key programming concepts you've mastered",
            "Describe your professtion development, emphasizing any certifications obtained. How have these certification enriched you",
            "Discuss notable project in your programming expirence . what challenges did you faced0",

        ] 
    };


    const [formData, setFormData] = useState({
        fullName : "",
        a1 : "",
        a2 : "",
        a3 : "",   
    });
    

    const handleSubmit =  (event) => {
        event.preventDefault();
        console.log(formData);
        
    }


    return (
        <div>
            <div>
                <h2>{job.title}</h2>
                <div className="flex items-center gap-x-4 mt-4">
                    <div className="flex items-center gap-x-2">
                        <Briefcase />
                        <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <MapPin />
                        <span>{job.location}</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 py-4">
            <p>{job.description}</p>
        </div>
        <Separator/>
        <form className="py-8 flex flex-col gap-y-8 " onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
            <Label>Full Name</Label>
            <Input 
                required 
                value = {formData.fullName}
                onChange = {(event) => setFormData({...formData, fullName : event.target.value})} />
            </div>

            <div>
            <div className="flex flex-col gap-y-2">
            <Label>Talk about the expirence you have gained n Architecting Software ?</Label>
            <Textarea 
                required  
                value = {formData.a1}
                onChange = {(event) =>  setFormData({...formData, a1 : event.target.value})} />
            </div>

            </div>
            <div>
            <div className="flex flex-col gap-y-2">
            <Label>What are the technologies you are familar with ?</Label>
            <Textarea 
                required 
                value = {formData.a2} 
                onChange = {(event) =>  setFormData({...formData, a2 : event.target.value})}/>
            </div>

            </div>
            <div>
            <div className="flex flex-col gap-y-2">
            <Label>Talk about the expirence you got in Software Development ?</Label>
            <Textarea 
                required  
                value = {formData.a3}
                onChange = {(event) =>  setFormData({...formData, a3 : event.target.value})}/>
            </div>

            </div>

            <div className="flex gap-x-4 items-center">
            <Button type = "submit" className = "bg-card text-card-foreground w-fit">
                Submit
            </Button>

            <Button 
                variant = "outline"
                type = "button" 
                onClick = {() => setFormData({
                    fullName : "",
                    a1 : "",
                    a2 : "",
                    a3 : "",   
                } 

                )
                } 
                className = "w-fit"
                >
                Clear
            </Button>

            

            </div>
            

        </form>
        </div>


    ) ;
}

export default JobPage;