import {
  Deck,
  Heading,
  DefaultTemplate,
  SlideLayout,
  CodePane,
  Appear,
  Slide,
} from "spectacle";
import Strava from "./assets/strava.jpg";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";
import Request from "./components/Request";
import Iframe from "./components/Iframe";

const theme = {
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-primary)",
    tertiary: "var(--color-secondary)",
  },
};

function App() {
  return (
    <Deck theme={theme} template={<DefaultTemplate />}>
      <SlideLayout.Center>
        <Heading>Future Proof Growth</Heading>
        <Heading>🚀</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <img
          loading="lazy"
          src="https://avatars.githubusercontent.com/u/44360092"
          alt="Evan Burrell"
          style={{ width: "100%" }}
        />
        <Heading>Evan Burrell</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <img
          loading="lazy"
          src="https://uploads-ssl.webflow.com/5e38423084bb96caf84a40ce/5e68def37c7882fc13150c59_Group%20Logo%20-%20Black.png"
          alt="Street Group"
          width="100%"
          style={{ filter: "invert(1)", width: "100%" }}
        />
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>I'm from Reading</Heading>
        <img
          loading="lazy"
          src="https://www.shutterstock.com/shutterstock/videos/1067911535/thumb/1.jpg"
          alt="Welcome to Reading"
        ></img>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Wait not that Reading</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>
          <s>Reading</s> Redding
        </Heading>
        <Heading>🇺🇸</Heading>
      </SlideLayout.Center>
      <SlideLayout.FullBleedImage
        imgProps={{ loading: "eager" }}
        src="https://content.r9cdn.net/rimg/dimg/e0/59/d766af50-city-14738-1688188dd78.jpg?crop=true&width=2160&height=1215&xhint=3364&yhint=705&outputtype=webp"
        alt="Redding"
      ></SlideLayout.FullBleedImage>
      <SlideLayout.Center>
        <Heading>Portland</Heading>
        <Iframe
          src="https://giphy.com/embed/Fwdrw9BSH4BVe"
          width="480"
          height="313"
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Things I like...</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Family</Heading>
        <Heading>👨‍👩‍👧‍👦</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Triathlon</Heading>
        <Heading>🏊‍♂️ 🚲 🏃‍♂️</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Beer</Heading>
        <Heading>🍺</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Growth starts with an idea</Heading>
        <Heading>💡</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Strava</Heading>
        <img src={Strava} alt="Strava" height={300} width={300}></img>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Business Idea</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Beer + Strava = Brava</Heading>
        <Heading>🍺 + 👟 = 👏</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Ground Rules</Heading>
        <Iframe
          src="https://giphy.com/embed/iB4PoTVka0Xnul7UaC"
          width="480"
          height="270"
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.Quote attribution="Someone on Twitter">
        PHP is dead.
      </SlideLayout.Quote>
      <SlideLayout.Quote attribution="Socrates">
        You don't know what you don't know.
      </SlideLayout.Quote>
      <SlideLayout.List
        title="Things I do know"
        items={["PHP 🐘", "TypeScript 🐐"]}
      ></SlideLayout.List>
      <SlideLayout.Center>
        <Heading>Let's build Brava</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Monolith?</Heading>
      </SlideLayout.Center>
      <SlideLayout.List
        title="MVC"
        items={["Model", "View", "Controller"]}
      ></SlideLayout.List>
      <SlideLayout.List
        title="Models"
        items={["Activity", "Comment", "Cheer (Kudos)"]}
      ></SlideLayout.List>
      <SlideLayout.Center>
        <CodePane language="php" theme={materialOceanic}>
          {`
class Activity extends Model
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function cheers(): HasMany
    {
        return $this->hasMany(Cheer::class);
    }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
export default class ActivitiesController {
  public async index() {
    const activities = await prisma.activity.findMany({
      include: {
        comments: true,
        cheers: true,
      }
    });

    return View.render('activities.index', { activities })
  }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
type Activity = {
  name: string;
  distance: number;
  type: ActivityTypeEnum;
  comments: Comment[];
  cheers: Cheer[];
};
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
type Comment = {
  text: string;
  commentedAt: string; // timestamp
  user: User;
};
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
type Cheer = {
  user: User;
  beer: Beer;
};
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
type Beer = {
  style: BeerStyleEnum;
  brewery: string;
};
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="json" theme={materialOceanic}>
          {`
{
    "activities": [
        {
            "name": "Evening Run",
            "distance": "10000",
            "type": 1,
            "comments": [
                {
                    "text": "Solid Effort",
                    "commentedAt": "2023-07-26 18:00:00"
                },
                { "text": "Average", "commentedAt": "2023-07-26 18:00:00" }
            ],
            "cheers": [
                {
                    "user": { "id": "81fa18e2-eeb7-4694-ada4-ccf15395e805" },
                    "beer": {
                        "style": 3,
                        "brewery": "Track"
                    }
                }
            ]
        }
    ]
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>View Model?</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="php" theme={materialOceanic}>
          {`
          class ActivitiesViewModel
          {
              public function __construct(
                  public string $name,
                  public int $distance,
                  public string $type,
                  public array $comments,
                  public array $cheers,
              ) {
              }
          }
          `}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="php" theme={materialOceanic}>
          {`
            public static function fromModel(Activity $activity): static
            {
                return new static(
                    name: $activity->name,
                    distance: $activity->distance,
                    type: $activity->type->displayAsString(),
                    comments: $activity->comments->map(fn (Comment $comment) => [
                        'text' => $comment->text,
                        'commentedAt' => $comment->diffForHumans()
                    ]),
                    cheers: $activity->cheers->map(fn (Cheer $cheer) => [
                        'beer' => $cheer->style->displayAsString(),
                        'brewery' => $cheer->brewery
                    ])
                );
            }
          `}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Data Manipulation</Heading>
        <CodePane language="jsx" theme={materialOceanic}>
          {`
              {/* Not useful for a user */}
              <span>Distance: {distance} m</span>

              {/* Useful for a user  */}
              <span>Distance: {distance / 1000} km</span>
          `}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.TwoColumn
        left={
          <>
            <Heading>Data</Heading>
            <div style={{ padding: "1rem" }}>
              <CodePane language="typescript" theme={materialOceanic}>
                {`
              function fromModel(user: User) {
                return {
                  isActive: user.isActive ? 'Yes' : 'No'
                }
              }

              // Keep it simple
              function fromModel(user: User) {
                return {
                  isActive: user.isActive
                }
              }
          `}
              </CodePane>
            </div>
          </>
        }
        right={
          <>
            <Heading>Presentation</Heading>
            <div style={{ padding: "1rem" }}>
              <CodePane language="jsx" theme={materialOceanic}>
                {`
            {/* { isActive: 'Yes' | 'No' } */}
            <span>{isActive}</span>

            {/* { isActive: boolean } */}
            <span>{isActive ? 'Yes' : 'No'}</span>
        `}
              </CodePane>
            </div>
          </>
        }
      ></SlideLayout.TwoColumn>
      <SlideLayout.Center>
        <Heading>Does it scale?</Heading>
        <Appear>
          <Iframe
            src="https://giphy.com/embed/T5QOxf0IRjzYQ"
            width="480"
            height="361"
            allowFullScreen
            style={{ border: "none", width: "100%" }}
          ></Iframe>
        </Appear>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Composition</Heading>
        <Heading>🧑‍🔬</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
            function fromModel(activity: Activity): ActivityData {
              return {
                  name: activity.name,
                  distance: activity.distance,
                  type: activity.type,
                  ...(Object.hasOwn(activity, 'comments')
                      ? { comments: CommentData.collection(activity.comments) }
                      : {}),
                  ...(Object.hasOwn(activity, 'cheers')
                      ? { cheers: CheerData.collection(activity.cheers) }
                      : {}),
              };
            }
          `}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.List
        title="Combinations"
        items={[
          "Activity",
          "Activity + Comments",
          "Activity + Cheers",
          "Activity + Comments + Cheers",
        ]}
      ></SlideLayout.List>
      <SlideLayout.Center>
        <Heading>Congratulations</Heading>
        <Iframe
          src="https://giphy.com/embed/l0CLTexuIY7XStMTm"
          width="480"
          height="253"
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Brava is successful</Heading>
        <Heading>🎉</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Bring on Integrations</Heading>
        <Heading>👊</Heading>
      </SlideLayout.Center>
      <Slide>
        <Heading>API</Heading>
        <div style={{ fontSize: "2rem" }}>
          <Request method="GET" route="/activities">
            Get all activities
          </Request>
          <Request method="POST" route="/activities">
            Create an activity
          </Request>
          <Request method="GET" route="/activities/{activity}">
            Get an activity by ID
          </Request>
          <Request method="GET" route="/activities/{activity}/comments">
            Get comments for an activity
          </Request>
          <Request method="GET" route="/activities/{activity}/cheers">
            Get cheers for an activity
          </Request>
        </div>
      </Slide>
      <Slide>
        <Heading>Use the Standard</Heading>
        <Iframe
          src="https://jsonapi.org/"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            border: "none",
          }}
        ></Iframe>
      </Slide>
      <SlideLayout.Center>
        <Heading>Write it down</Heading>
        <Heading>📘</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Reduce, Reuse, Recycle</Heading>
        <Heading>♻️</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <CodePane language="typescript" theme={materialOceanic}>
          {`
export default class ActivityCommentsController {
  public async index() {
    const comments = await prisma.comments.findMany({
      where: {
        activity: {
          id: activity.id
        }
      },
    }

    return CommentData.collection(comments).json()
  }
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Internal + External Consistency</Heading>
        <Heading>🤝</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>External feature requests?</Heading>
        <div style={{ fontSize: "2rem" }}>
          <br></br>Introspect.
          <br></br>Should we be doing this?
        </div>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Decouple?</Heading>
        <Iframe
          src="https://giphy.com/embed/1xljZ6jByg4EnptnTz"
          width="480"
          height="270"
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Split Teams?</Heading>
        <Iframe
          src="https://giphy.com/embed/twyrWnFx9FKZpvWXJX"
          width="436"
          height="480"
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.List
        title="Teams"
        items={["Activities Team", "Comments Team", "Cheers Team"]}
      ></SlideLayout.List>
      <SlideLayout.Center>
        <Heading>Press to Scale</Heading>
        <Iframe
          src="https://giphy.com/embed/SS8JniLx8U4VDUCbHo"
          width="436"
          height="480"
          allowFullScreen
          style={{ width: "100%", border: "none" }}
        ></Iframe>
      </SlideLayout.Center>
      <SlideLayout.Quote attribution="Lorna Mitchell">
        Treat your APIs as first class citizens. Your teammates and clients will
        thank you.
      </SlideLayout.Quote>
      <SlideLayout.Center>
        <Heading>Documentation as contracts</Heading>
        <Heading>👍</Heading>
      </SlideLayout.Center>
      <SlideLayout.Center>
        <Heading>Code as contracts</Heading>
        <Iframe
          src="https://giphy.com/embed/3oriNSH0Ddh93oO7PW"
          width="480"
          height="448"
        ></Iframe>
      </SlideLayout.Center>
      <Slide>
        <Heading>Apollo REST Datasource</Heading>
        <Iframe
          src="https://apollographql.com/docs/apollo-server/data/fetching-rest/"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            border: "none",
          }}
        ></Iframe>
      </Slide>
      <SlideLayout.Center>
        <CodePane language="graphql" theme={materialOceanic}>
          {`
query {
	# /activities
	activities {
		name
		distance
		type
		# /activities/{activity}/comments
		comments {
			text
			commentedAt
		}
		# /activities/{activity}/cheers
		cheers {
			user {
				id
			}
			beer {
				style
				brewery
			}
		}
	}
}
`}
        </CodePane>
      </SlideLayout.Center>
      <SlideLayout.List
        title="Benefits"
        items={[
          "BYOL - Bring your own language",
          "Free Documentation",
          "Type Safety",
          "Code Generation - 🆒",
        ]}
      ></SlideLayout.List>
      <SlideLayout.List
        title="Social"
        items={[
          "Twitter - @ev_burrell",
          "LinkedIn - https://linkedin.com/in/evan-burrell",
        ]}
      ></SlideLayout.List>
      <SlideLayout.Center>
        <Heading>Thank you!</Heading>
        <Iframe
          src="https://giphy.com/embed/ieyYHlh2vNeH82BYGY"
          width="480"
          height="262"
        ></Iframe>
      </SlideLayout.Center>
    </Deck>
  );
}

export default App;
