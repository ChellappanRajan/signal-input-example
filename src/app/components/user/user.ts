import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";

@Component({
    selector:'app-user',
    standalone:true,
    imports:[JsonPipe],
    template:`
    User Name: {{user()?.name}}
    User Age: {{user()?.age}}
    can Vote: {{canVote()}}
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class User<T>{
    user = input<any>();

    canVote = computed(()=>{
        return (this.user()?.age ?? 0) > 18;
    })

}