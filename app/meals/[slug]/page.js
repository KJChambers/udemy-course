import { use } from 'react';

export default function MealDetailsPage({ params }) {
    const { slug } = use(params);
    
    return (
        <main>
            <h1>Meal Details</h1>
            <p>{slug}</p>
        </main>
    );
}