import { Stack } from 'expo-router';
export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Assignment 1",
            headerStyle: { backgroundColor: 'gray', },
            headerTintColor: 'white',
            headerBackVisible: false,
            headerTitleAlign: 'center',
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,

                }}
            />
            <Stack.Screen
                name="secondpage"
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
        </Stack>
    );
}