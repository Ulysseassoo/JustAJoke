import { Avatar, Box, Flex, HStack, Icon, Image, Pressable, Text, VStack } from "native-base"
import React, { useEffect, useRef, useState } from "react"
import { Animated } from "react-native"
import { Path } from "react-native-svg"

interface Props {
	isJokeDay: boolean
}

const JokeCard = ({ isJokeDay }: Props) => {
	const [isFlipped, setIsFlipped] = useState(false)
	const scaleXStart = isFlipped ? 1 : -1
	const scaleXEnd = !isFlipped ? -1 : 1
	const scaleYStart = isFlipped ? 1 : -1
	const scaleYEnd = !isFlipped ? -1 : 1
	const scaleX = useRef(new Animated.Value(scaleXStart)).current
	const scaleY = useRef(new Animated.Value(scaleYStart)).current

	useEffect(() => {
		Animated.stagger(1000, [
			Animated.timing(scaleX, { toValue: scaleXEnd, useNativeDriver: false }),
			Animated.timing(scaleY, { toValue: scaleYEnd, useNativeDriver: false })
		]).start()
	}, [isFlipped])

	if (isJokeDay) {
		return (
			<VStack
				borderRadius="xl"
				width="full"
				p="4"
				bg={{
					linearGradient: {
						colors: ["#FF9839", "#F95F5E"],
						start: [0, 1],
						end: [0.75, 0]
					}
				}}>
				<HStack space="1" alignItems="center">
					<Icon viewBox="0 0 24 24" size={8}>
						<Path
							d="M18.3038 12.8089L17.7539 12.2989L18.3038 12.8089ZM11.2327 5.73783L11.7427 6.28773L11.2327 5.73783ZM21.6611 4.27232L22.4048 4.36958L21.6611 4.27232ZM19.7693 2.38046L19.8665 3.12413L19.7693 2.38046ZM6.49459 12.6506L7.16801 12.9808L6.49459 12.6506ZM11.391 17.547L11.0608 16.8736L11.391 17.547ZM10.1906 12.1203C9.89769 11.8274 9.42282 11.8274 9.12993 12.1203C8.83703 12.4132 8.83703 12.888 9.12993 13.1809L10.1906 12.1203ZM12.8237 16.8747C13.1166 17.1676 13.5915 17.1676 13.8844 16.8747C14.1773 16.5818 14.1773 16.107 13.8844 15.8141L12.8237 16.8747ZM6.45975 18.6425C6.75265 18.3496 6.75265 17.8747 6.45975 17.5818C6.16686 17.2889 5.69199 17.2889 5.39909 17.5818L6.45975 18.6425ZM2.57067 20.4103C2.27777 20.7032 2.27777 21.178 2.57067 21.4709C2.86356 21.7638 3.33843 21.7638 3.63133 21.4709L2.57067 20.4103ZM4.33843 16.5212C4.63133 16.2283 4.63133 15.7534 4.33843 15.4605C4.04554 15.1676 3.57067 15.1676 3.27777 15.4605L4.33843 16.5212ZM1.86356 16.8747C1.57067 17.1676 1.57067 17.6425 1.86356 17.9354C2.15645 18.2283 2.63133 18.2283 2.92422 17.9354L1.86356 16.8747ZM8.58107 20.7638C8.87397 20.4709 8.87397 19.996 8.58107 19.7032C8.28818 19.4103 7.81331 19.4103 7.52041 19.7032L8.58107 20.7638ZM6.1062 21.1174C5.81331 21.4103 5.81331 21.8851 6.1062 22.178C6.39909 22.4709 6.87397 22.4709 7.16686 22.178L6.1062 21.1174ZM11.3388 20.9759C11.2802 20.5659 10.9003 20.281 10.4903 20.3395C10.0802 20.3981 9.79529 20.778 9.85387 21.1881L11.3388 20.9759ZM15.7582 17.6172L16.5007 17.5111L15.7582 17.6172ZM2.85349 14.1877C3.26354 14.2463 3.64344 13.9614 3.70202 13.5513C3.7606 13.1413 3.47567 12.7614 3.06562 12.7028L2.85349 14.1877ZM6.42438 8.2834L6.31831 9.02586L6.31831 9.02586L6.42438 8.2834ZM16.816 2.17788C16.4145 2.27955 16.1714 2.68748 16.2731 3.08902C16.3747 3.49056 16.7827 3.73366 17.1842 3.63199L16.816 2.17788ZM14.1982 4.67815C14.5727 4.50123 14.7329 4.05419 14.556 3.67966C14.3791 3.30513 13.932 3.14493 13.5575 3.32185L14.1982 4.67815ZM9.75047 16.63L7.41161 14.2911L6.35095 15.3518L8.68981 17.6906L9.75047 16.63ZM17.7539 12.2989C15.8602 14.3406 12.7855 16.028 11.0608 16.8736L11.7211 18.2204C13.4613 17.3673 16.757 15.5795 18.8537 13.3189L17.7539 12.2989ZM7.16801 12.9808C8.01355 11.256 9.70097 8.18137 11.7427 6.28773L10.7227 5.18793C8.46206 7.28458 6.6743 10.5802 5.82116 12.3205L7.16801 12.9808ZM20.9175 4.17506C20.6136 6.49841 19.8063 10.086 17.7539 12.2989L18.8537 13.3189C21.2492 10.7361 22.0963 6.72859 22.4048 4.36958L20.9175 4.17506ZM22.4048 4.36958C22.6159 2.75571 21.2859 1.42572 19.672 1.6368L19.8665 3.12413C20.5035 3.04082 21.0008 3.5381 20.9175 4.17506L22.4048 4.36958ZM7.41161 14.2911C7.04843 13.9279 6.95969 13.4057 7.16801 12.9808L5.82116 12.3205C5.31297 13.3571 5.56316 14.564 6.35095 15.3518L7.41161 14.2911ZM8.68981 17.6906C9.4776 18.4784 10.6845 18.7286 11.7211 18.2204L11.0608 16.8736C10.6359 17.0819 10.1136 16.9932 9.75047 16.63L8.68981 17.6906ZM9.12993 13.1809L12.8237 16.8747L13.8844 15.8141L10.1906 12.1203L9.12993 13.1809ZM5.39909 17.5818L2.57067 20.4103L3.63133 21.4709L6.45975 18.6425L5.39909 17.5818ZM3.27777 15.4605L1.86356 16.8747L2.92422 17.9354L4.33843 16.5212L3.27777 15.4605ZM7.52041 19.7032L6.1062 21.1174L7.16686 22.178L8.58107 20.7638L7.52041 19.7032ZM13.1773 6.97523C12.1033 8.04917 12.1033 9.79037 13.1773 10.8643L14.2379 9.80366C13.7498 9.3155 13.7498 8.52404 14.2379 8.03589L13.1773 6.97523ZM13.1773 10.8643C14.2512 11.9383 15.9924 11.9383 17.0664 10.8643L16.0057 9.80366C15.5175 10.2918 14.7261 10.2918 14.2379 9.80366L13.1773 10.8643ZM17.0664 10.8643C18.1403 9.79038 18.1403 8.04917 17.0664 6.97523L16.0057 8.03589C16.4939 8.52404 16.4939 9.3155 16.0057 9.80366L17.0664 10.8643ZM17.0664 6.97523C15.9924 5.90129 14.2512 5.90129 13.1773 6.97523L14.2379 8.03589C14.7261 7.54773 15.5175 7.54773 16.0057 8.03589L17.0664 6.97523ZM14.945 17.9354L11.7631 21.1174L12.8237 22.178L16.0057 18.996L14.945 17.9354ZM14.7329 15.7434L15.0157 17.7233L16.5007 17.5111L16.2178 15.5312L14.7329 15.7434ZM11.7631 21.1174C11.6174 21.263 11.3679 21.1799 11.3388 20.9759L9.85387 21.1881C10.0578 22.6157 11.804 23.1977 12.8237 22.178L11.7631 21.1174ZM16.0057 18.996C16.3952 18.6066 16.5786 18.0564 16.5007 17.5111L15.0157 17.7233C15.0269 17.8011 15.0007 17.8797 14.945 17.9354L16.0057 18.996ZM5.04552 8.03591L1.86354 11.2179L2.9242 12.2786L6.10618 9.09657L5.04552 8.03591ZM8.51034 7.82378L6.53044 7.54094L6.31831 9.02586L8.29821 9.3087L8.51034 7.82378ZM1.86354 11.2179C0.843835 12.2376 1.4259 13.9838 2.85349 14.1877L3.06562 12.7028C2.86168 12.6737 2.77853 12.4242 2.9242 12.2786L1.86354 11.2179ZM6.10618 9.09657C6.16182 9.04093 6.24041 9.01473 6.31831 9.02586L6.53044 7.54094C5.98515 7.46304 5.43501 7.64642 5.04552 8.03591L6.10618 9.09657ZM17.1842 3.63199C18.1657 3.38348 19.0959 3.22492 19.8665 3.12413L19.672 1.6368C18.8567 1.74343 17.8668 1.91183 16.816 2.17788L17.1842 3.63199ZM11.7427 6.28773C12.4422 5.639 13.286 5.10903 14.1982 4.67815L13.5575 3.32185C12.5439 3.80065 11.5615 4.40997 10.7227 5.18793L11.7427 6.28773Z"
							fill="white"
						/>
					</Icon>

					<Text color="white" fontWeight="bold" fontSize="lg">
						Blague du jour
					</Text>
				</HStack>

				<Pressable onPress={() => setIsFlipped((previous) => !previous)}>
					<Text fontWeight={"bold"} fontSize="md" pt="2" color="white">
						Comment appelle t-on un cochon qui vole ?
					</Text>
				</Pressable>

				<Animated.Text
					style={{
						color: "white",
						transform: [{ scaleX }, { scaleY }],
						textAlign: isFlipped ? "left" : "right"
					}}>
					Un aéroporc
				</Animated.Text>

				<Flex justifyContent={"space-between"} alignItems="center" flexDir="row" pt="4" zIndex={1}>
					<Avatar bg="blue.700" size="md">
						DS
					</Avatar>

					<HStack space="2">
						<Pressable px="4" py="2" bg="black" borderRadius={"full"}>
							<HStack space="1.5" alignItems="center">
								<Text color="white">148</Text>
								<Image source={require("../../../assets/like.png")} alt="like button" />
							</HStack>
						</Pressable>

						<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
							<Image source={require("../../../assets/dislike.png")} alt="dislike button" />
						</Pressable>
					</HStack>
				</Flex>

				<Box position="absolute" bottom="0" right="0" zIndex={0}>
					<Icon viewBox="0 0 125 136" size={102}>
						<Path
							d="M77.8701 160.287C35.3193 160.287 0.701416 124.523 0.701416 80.5629C0.701416 36.6032 35.3193 0.839111 77.8701 0.839111C120.421 0.839111 155.039 36.6032 155.039 80.5629C155.039 124.523 120.421 160.287 77.8701 160.287ZM77.8701 7.92567C39.1023 7.92567 7.56085 40.5114 7.56085 80.5629C7.56085 120.614 39.1023 153.2 77.8701 153.2C116.638 153.2 148.179 120.614 148.179 80.5629C148.179 40.5114 116.638 7.92567 77.8701 7.92567Z"
							fill="white"
							fillOpacity="0.13"
						/>
						<Path
							d="M120.58 73.6991H95.2374C93.8044 73.6991 92.5271 72.7585 92.0483 71.3484C91.5696 69.9383 91.9925 68.3694 93.1057 67.4269L115.955 48.0897C117.403 46.8596 119.538 47.0943 120.714 48.6068C121.892 50.121 121.67 52.3447 120.218 53.5713L104.779 66.6363H120.58C122.448 66.6363 123.964 68.2176 123.964 70.1659C123.964 72.1143 122.448 73.6991 120.58 73.6991Z"
							fill="white"
							fillOpacity="0.13"
						/>
						<Path
							d="M60.5045 73.6991H35.1599C33.2921 73.6991 31.7761 72.1176 31.7761 70.169C31.7761 68.2203 33.2921 66.6388 35.1599 66.6388H50.9622L35.522 53.572C34.072 52.3435 33.8487 50.1195 35.0263 48.6068C36.2038 47.0924 38.3356 46.8611 39.7856 48.0896L62.6346 67.4296C63.7462 68.3721 64.1708 69.9413 63.692 71.3516C63.2149 72.7583 61.9358 73.6991 60.5045 73.6991Z"
							fill="white"
							fillOpacity="0.13"
						/>
						<Path
							d="M77.87 136C53.5954 136 33.8477 115.339 33.8477 89.9423C33.8477 87.9707 35.3771 86.3706 37.2616 86.3706H118.479C120.363 86.3706 121.892 87.9707 121.892 89.9423C121.892 115.339 102.145 136 77.87 136ZM40.8308 93.5141C42.5583 113.305 58.5115 128.856 77.87 128.856C97.2286 128.856 113.182 113.305 114.909 93.5141H40.8308Z"
							fill="white"
							fillOpacity="0.13"
						/>
					</Icon>
				</Box>
			</VStack>
		)
	}

	return (
		<VStack borderRadius="xl" width="full" p="4" bg={"white"}>
			<HStack space="4" alignItems="center">
				<Avatar bg="yellow.700" size="md">
					BF
				</Avatar>

				<HStack alignItems={"center"} space="3">
					<Text color="black" fontWeight="bold" fontSize="lg">
						Bad Freez
					</Text>

					<Text fontSize="xs" color="#808080">
						Il y a 3 minutes
					</Text>
				</HStack>
			</HStack>

			<Pressable onPress={() => setIsFlipped((previous) => !previous)} pl="16">
				<Text fontWeight={"bold"} fontSize="md" pt="2" color="black">
					J'ai fait une blague à Carrefour
				</Text>
			</Pressable>

			<Animated.Text
				style={{
					color: "#979797",
					transform: [{ scaleX }, { scaleY }],
					textAlign: isFlipped ? "left" : "right",
					paddingRight: isFlipped ? 0 : 64,
					paddingLeft: isFlipped ? 64 : 0
				}}>
				Elle n'a pas bien marché
			</Animated.Text>

			<Flex justifyContent={"flex-end"} flexDir="row" pt="4" zIndex={1}>
				<HStack space="2">
					<Pressable px="4" py="2" bg="white" borderRadius={"full"} borderColor="black" borderWidth={"1"}>
						<HStack space="1.5" alignItems="center">
							<Text color="black">22</Text>
							<Image source={require("../../../assets/like.png")} alt="like button" />
						</HStack>
					</Pressable>

					<Pressable px="4" py="2" bg="white" borderColor="black" borderWidth={"1"} borderRadius={"full"}>
						<Image source={require("../../../assets/dislike.png")} alt="dislike button" />
					</Pressable>
				</HStack>
			</Flex>
		</VStack>
	)
}

export default JokeCard