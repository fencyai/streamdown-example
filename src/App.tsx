import { useStreamingChatCompletions } from '@fencyai/react'
import { Response } from './components/ai-elements/response'

function App() {
    const { latest, createStreamingChatCompletion } =
        useStreamingChatCompletions()

    return (
        <div className="w-screen h-screen flex flex-col p-10">
            <div>
                <button
                    onClick={() => {
                        createStreamingChatCompletion({
                            openai: {
                                model: 'gpt-4o-mini',
                                messages: [
                                    {
                                        role: 'user',
                                        content:
                                            'Show me some react code and 1 example of how to use it.',
                                    },
                                ],
                            },
                        })
                    }}
                    className="px-4 py-2 rounded-lg"
                >
                    {latest?.loading
                        ? 'Streaming...'
                        : 'Create Chat Completion'}
                </button>
            </div>

            <div className="mt-10">
                {latest?.loading && <div>Streaming...</div>}
                {latest?.response && <Response>{latest.response}</Response>}
            </div>
        </div>
    )
}

export default App
